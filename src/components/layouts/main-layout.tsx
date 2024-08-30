import { FC, PropsWithChildren } from "react";
import { Seo } from "../ui/seo";
import { Container } from "../ui/container";

interface MainLayoutProps {
  title: string;
  description?: string;
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  title,
  children,
  description = "",
}) => {
  return (
    <>
      <Seo title={title} description={description} />
      <header className="bg-zinc-300">
        <Container className="p-4">
          <p>Header</p>
        </Container>
      </header>
      <main className="h-[calc(100vh-112px)]">{children}</main>
      <footer className="bg-zinc-800">
        <Container className="p-4">
          <p className="text-white">Footer</p>
        </Container>
      </footer>
    </>
  );
};
