import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../context/PopupContext";
import "../styles/Notification.css";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { activePopup, openPopup, closePopup } = usePopup();
  const isOpen = activePopup === "notification";

  const getSystemInfo = () => {
    const userAgent = window.navigator.userAgent;
    let system = "DEFAULT";

    if (userAgent.indexOf("Win") !== -1) system = "WINDOWS";
    else if (userAgent.indexOf("Mac") !== -1) {
      if (userAgent.indexOf("iPad") !== -1) system = "IPAD";
      else if (userAgent.indexOf("iPhone") !== -1) system = "IOS";
      else system = "MACOS";
    } else if (userAgent.indexOf("Linux") !== -1) {
      if (userAgent.indexOf("Android") !== -1) system = "ANDROID";
      else system = "LINUX";
    }

    return system;
  };

  // Initial welcome notification
  useEffect(() => {
    const system = getSystemInfo();
    const welcomeNotification = {
      id: Date.now(),
      title: t("WELCOME_NOTIFICATION_TITLE"),
      message: t(`WELCOME_NOTIFICATION_${system}`),
      timestamp: new Date(),
      read: false,
    };
    setNotifications([welcomeNotification]);
    setHasNewNotification(true);
  }, [t]);

  // Time-based notification
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const timeNotification = {
        id: Date.now(),
        title: t("TIME_NOTIFICATION_TITLE"),
        message: t("TIME_NOTIFICATION_MESSAGE"),
        timestamp: new Date(),
        read: false,
        action: () => navigate("/contact"),
      };
      setNotifications((prev) => [...prev, timeNotification]);
      setHasNewNotification(true);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearTimeout(timeoutId);
  }, [t, navigate]);

  const toggleNotifications = () => {
    if (isOpen) {
      closePopup();
      markAllAsRead();
    } else {
      openPopup("notification");
    }
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
    setHasNewNotification(false);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setHasNewNotification(false);
  };

  const handleNotificationClick = (notification) => {
    if (notification.action) {
      notification.action();
      closePopup();
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notification-container">
      <button
        className={`notification-button ${hasNewNotification ? "ringing" : ""}`}
        onClick={toggleNotifications}
        aria-label="Notifications"
      >
        <FaBell />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      <div className={`notification-popup ${isOpen ? "open" : ""}`}>
        <div className="notification-header">
          <h3>{t("NOTIFICATIONS")}</h3>
          {notifications.length > 0 && (
            <button className="clear-button" onClick={clearNotifications}>
              {t("CLEAR_ALL")}
            </button>
          )}
        </div>

        <div className="notification-list">
          {notifications.length === 0 ? (
            <p className="no-notifications">{t("NO_NOTIFICATIONS")}</p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${
                  !notification.read ? "unread" : ""
                } ${notification.action ? "clickable" : ""}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <span className="notification-time">
                  {formatTimestamp(notification.timestamp)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notification;
