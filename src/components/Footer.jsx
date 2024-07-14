import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-700 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Link1 */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Link2 */}
        <div>
          <h3 className="font-semibold mb-2">Platform</h3>
          <ul className="space-y-1">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Link3 */}
        <div>
          <h3 className="font-semibold mb-2">Community</h3>
          <ul className="space-y-1">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
