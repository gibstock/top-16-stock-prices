import type { NextPage } from "next";

export const Footer: NextPage = () => {
  return (
    <>
      <footer className="w-full flex flex-col md:flex-row md:gap-4 justify-center items-center mt-8 dark:text-light-primary5">
        <p>Developed by Andre Gonzales</p>
        <p>&copy; 2022</p>
        <p><a href="mailto:andre@agonzales.dev">andre@agonzales.dev</a></p>
      </footer>
    </>
  )
}