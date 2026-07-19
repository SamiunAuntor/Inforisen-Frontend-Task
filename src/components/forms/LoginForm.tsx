"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, UserRound } from "lucide-react";

function GoogleMark() {
  return (
    <Image
      src="/assets/hero/google.png"
      alt=""
      width={24}
      height={24}
      className="size-5 object-contain"
    />
  );
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="mt-8 w-full max-w-[528px]"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-[18px]">
        <div>
          <label htmlFor="username" className="mb-2.5 block text-[13px] font-medium">
            User Name
          </label>
          <div className="relative">
            <UserRound
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body-text"
              size={17}
            />
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="user name"
              className="h-12 w-full rounded-xl border border-[#ef8d3d] bg-white pl-11 pr-4 text-[13px] outline-none transition placeholder:text-[#777] focus:border-primary focus:ring-3 focus:ring-primary/15"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-2.5 block text-[13px] font-medium">
            Password
          </label>
          <div className="relative">
            <LockKeyhole
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body-text"
              size={17}
            />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="********"
              className="h-12 w-full rounded-xl border border-[#ef8d3d] bg-white pl-11 pr-12 text-[13px] outline-none transition placeholder:text-[#777] focus:border-primary focus:ring-3 focus:ring-primary/15"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-body-text transition hover:bg-orange-50 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((visible) => !visible)}
            >
              {showPassword ? <EyeOff aria-hidden="true" size={18} /> : <Eye aria-hidden="true" size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-3 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex cursor-pointer items-center gap-2.5">
          <input
            type="checkbox"
            name="remember"
            className="size-4 appearance-none rounded-full border border-primary bg-white checked:border-[4px] checked:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />
          <span className="text-body-text">Remember me</span>
        </label>
        <a
          href="#forgot-password"
          className="rounded-sm text-[#ef4b51] transition hover:text-[#b92d45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Forgot password?
        </a>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-[18px]">
        <button
          type="submit"
          className="h-12 rounded-xl bg-gradient-to-r from-[#f5b52e] via-[#db4c60] to-[#32115f] px-5 text-[13px] font-semibold text-white shadow-[0_7px_18px_rgba(83,28,83,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_9px_22px_rgba(83,28,83,0.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f245e] active:translate-y-0"
        >
          Sign In
        </button>
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-3 rounded-xl border border-[#ef8d3d] bg-white px-5 text-[13px] font-semibold transition hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <GoogleMark />
          Sign Up with Google
        </button>
      </div>

      <p className="mt-3.5 text-[13px] text-body-text">
        Don&apos;t have an account?{" "}
        <a
          href="#create-account"
          className="rounded-sm font-medium text-primary underline underline-offset-2 transition hover:text-[#c65313] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Create an Account
        </a>
      </p>
    </form>
  );
}
