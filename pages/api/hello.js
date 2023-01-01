// pages/api is a reserved folder for serverless functions aka Lambdas
// a good use case is for handling form input
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}