import { Facebook, Instagram, LucideIcon, Twitter } from "lucide-react";
import Link from "next/link";

interface Navigate {
  id: number;
  src: string;
  text: string;
}

interface Media {
  id: number;
  src: string;
  icon: LucideIcon;
}

const links: Navigate[] = [
  { id: 1, src: "#", text: "About" },
  { id: 2, src: "#", text: "Contact" },
  { id: 3, src: "#", text: "Terms of Use" },
  { id: 4, src: "#", text: "Privacy Policy" },
];

const social: Media[] = [
  { id: 1, src: "#", icon: Facebook },
  { id: 2, src: "#", icon: Twitter },
  { id: 3, src: "#", icon: Instagram },
];

function SocialNetwork({ id, src, icon: Icon }: Media) {
  return (
    <li>
      <Link href={src}>
        <Icon className="h-6 w-6 hover:text-orange-500" />
      </Link>
    </li>
  );
}

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container">
        <div className="flex flex-col gap-10 justify-center items-center text-center lg:text-left lg:flex-row lg:justify-between py-12">
          <div className="space-y-2">
            {/* Nav Links */}
            <ul className="flex items-center gap-5">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.src}
                    className="underline text-[#0D6EFD] text-sm lg:text-xl"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Copyright */}
            <p className="text-[#6C757D] text-sm">
              © Your Website 2023. All Rights Reserved.
            </p>
          </div>

          {/* Media */}
          <ul className="flex gap-5">
            {social.map((network) => (
              <SocialNetwork key={network.id} {...network} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
