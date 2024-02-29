import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../partials/Loading";
import Header from "../partials/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
