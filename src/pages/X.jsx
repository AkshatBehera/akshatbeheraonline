import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiTwitterXFill } from 'react-icons/ri';

const X = () => {
  useEffect(() => {
    // Load Twitter widgets.js if not already present
    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charSet = 'utf-8';
      script.onload = () => {
        // Ensure timeline loads after script is ready
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
          console.log('Twitter widgets loaded'); // Debug
        }
      };
      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else if (window.twttr && window.twttr.widgets) {
      // If script is already loaded, trigger widget load
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12">X Feed</h1>

        <div className="max-w-3xl mx-auto">
          {/* Featured Tweets Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-center">Featured Posts</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left column - Elon Musk Tweets */}
              <div className="space-y-6">
                {/* Tweet 1 */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                  <blockquote
                    className="twitter-tweet"
                    data-theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                  >
                    <a href="https://twitter.com/elonmusk/status/1836289127907758312">
                      Post - Elon Musk @elonmusk - Any sufficiently advanced magic is indistinguishable from technology - 1:20 AM CST / Sep 18, 2024
                    </a>
                  </blockquote>
                </div>
                {/* Tweet 2 */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                  <blockquote
                    className="twitter-tweet"
                    data-theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                  >
                    <a href="https://twitter.com/elonmusk/status/1637039810488483841">
                      Post - Elon Musk @elonmusk - Engineering is true magic - 5:34 AM CST / Mar 18, 2023
                    </a>
                  </blockquote>
                </div>
              </div>
              {/* Right column - SMX Tweet */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <blockquote
                  className="twitter-tweet"
                    data-theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                >
                  <a href="https://twitter.com/SpaceX/status/1883097869709971535">
                    Post - SMX @iam_smx - "Engineering and technology is the closest thing to Magic." - Elon Musk - 4:21 AM CST / Jan 25, 2025
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

          {/* My X Feed */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <RiTwitterXFill className="mr-2 text-black dark:text-white" size={20} />
                <h2 className="text-lg font-semibold">@akshatbehera</h2>
              </div>
              <a
                href="https://twitter.com/akshatbehera"
                className="twitter-follow-button"
                data-size="medium"
                data-show-count="false"
              >
                Follow @akshatbehera
              </a>
            </div>
            <div className="overflow-hidden rounded-lg">
              <a
                className="twitter-timeline"
                href="https://twitter.com/akshatbehera?ref_src=twsrc%5Etfw"
                data-height="500"
                data-theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
              >
                Posts by @akshatbehera - Timeline
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default X;
