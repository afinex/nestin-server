export const page = (req, res) => {
    res.status(200).send(`Here is your message: ${req.params.message}`);
}