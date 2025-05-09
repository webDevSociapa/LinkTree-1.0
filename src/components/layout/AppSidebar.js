'use client';
import LogoutButton from "@/components/buttons/LogoutButton";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppSidebar({page}) {

  console.log("page",page);
  
  const baseUrl = process.env.NEXTAUTH_URL;

  const path = usePathname();
  return (
    <nav className="inline-flex mx-auto flex-col text-center mt-8 gap-2 text-gray-500">
      <Link
        href={'/account'}
        className={
          "flex gap-4 p-2 "
          + (path === '/account' ? 'text-blue-500 hover:underline' : 'hover:underline')
        }>
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faFileLines}
          className={'w-6 h-6'}
        />
        <span className="">My Page</span>
      </Link>
      <Link
        href={'/analytics'}
        className={
          "flex gap-4 p-2 "
          + (path === '/analytics' ? 'text-blue-500 hover:underline' : 'hover:underline')
        }>
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faChartLine}
          className={'w-6 h-6'}
        />
        <span className="">Analytics</span>
      </Link>
      <LogoutButton
        iconLeft={true}
        className={'flex gap-4 items-center text-gray-500 p-2 hover:underline'}
        iconClasses={'w-6 h-6'}
      />
      <Link href={'/'} className="flex items-center gap-2 text-xs text-gray-500 border-t pt-4 hover:underline">
        <FontAwesomeIcon icon={faArrowLeft} className={'w-3 h-3'} />
        <span>Back to website</span>
      </Link>
      <button className="inline bg-red-500 text-white mt-[100px] py-2">
      <Link href={`${baseUrl}/${page?.uri}`} target="_blank">
        Preview
      </Link>
      </button>

    </nav>
  );
}
