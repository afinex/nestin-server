export const createConnectAccount = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      data: req.user,
      message: 'User data received successfully'
    });
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};
