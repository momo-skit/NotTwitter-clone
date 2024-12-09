import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id; // userId is the unique identifier (_id) of the logged-in user, used to query notifications specific to them.
    // Queries the notifications collection to find all notifications where the to field matches the logged-in user's userId.
    const notifications = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });
    // u date here becaseu-- after the fetch couls count that u jsut read so begin with find to: userId and end with to: userId
    await Notification.updateMany({ to: userId }, { read: true });

    res.status(200).json(notifications);
  } catch (error) {
    console.log("Error in getNotifications function", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({ to: userId });

    res.status(200).json({ message: "Notifications deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNotifications function", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const deleteNotification = async (req, res) => {
//   try {
//     const notificationId = req.params.id;
//     const userId = req.user._id;
//     const notification = await Notification.findByIdAndDelete(notificationId);

//     if (!notification) {
//       return res.status(404).json({ error: "Notification not found" });
//     }
//     // check if loggedin use is owerver of notification
//     if (notification.to.toString() !== userId.toString()) {
//       return res
//         .status(403)
//         .json({ error: "You are not allowed to delete this notification" });
//     }

//     await Notification.findByIdAndDelete(notificationId);
//     res.status(200).json({ message: "Notifications deleted successfully" });
//   } catch (error) {
//     console.log("Error in deleteNotifications function", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// to = receiver = logined user == current user

// from = sender = whoevever else that are non loggined user
