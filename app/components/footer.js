import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/social-icons/facebook.svg";
import instagram from "../../public/social-icons/instagram.svg";
import youtube from "../../public/social-icons/youtube.svg";
import xcorp from "../../public/social-icons/x.svg";
import tiktok from "../../public/social-icons/tiktok.svg";
export default function Footer() {
  return (
    <div
      id="footer"
      className="mt-16 text-base leading-7 font-light text-gray-500"
    >
      <div className="mt-12 h-px w-11/12 mx-auto bg-slate-300"></div>
      <div className="my-32 flex flex-col gap-8 items-center">
        <div className="flex flex-row gap-12 justify-between">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="flex flex-row gap-8 text-gray-50 items-center">
          <a href="https://www.facebook.com/SeeVVideoResumes">
            <Image src={facebook} width={32} height={32} alt="facebook"></Image>
          </a>
          <a href="https://www.instagram.com/seev_josh/">
            <Image
              src={instagram}
              width={32}
              height={32}
              alt="instagram"
            ></Image>
          </a>

          <a href="https://www.youtube.com/@SeeV_Josh">
            <Image src={youtube} width={32} height={32} alt="youtube"></Image>
          </a>

          <a href="https://twitter.com/SeeV_Josh">
            <Image src={xcorp} width={32} height={32} alt="xcorp"></Image>
          </a>

          <a href="https://www.tiktok.com/@seev_josh">
            <Image src={tiktok} width={32} height={32} alt="tiktok"></Image>
          </a>
        </div>
        <div>
          <p className="mt-4">© 2023 SeeV. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
