import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../partials/Loading";

export default function Layout() {
  return (
    <main>
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    </main>
  )
}
