// hello.js

// Use dotenv package for environment variables. This is especially useful in development.
// Remember to install it using npm or yarn if you haven't already.
import 'dotenv/config';

/**
 * Responds with a greeting message.
 * The NAME environment variable can be set to customize the greeted name.
 * If NAME is not set, it defaults to 'World'.
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} Response object with the greeting message.
 */
const hello = async (req, res) => {
  const name = process.env.NAME || 'World';
  return res.send(`Hello ${name}! Follow GDG Cloud Lahore for more Google Cloud tutorials and hands-on learning.`);
};

export { hello };

