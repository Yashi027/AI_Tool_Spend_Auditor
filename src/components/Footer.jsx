import {
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-700 pb-14">

          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center font-bold text-xl">
                S
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  StackSage AI
                </h2>

                <p className="text-gray-400 text-sm">
                  AI Cost Optimization Platform
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Audit your AI subscriptions, reduce waste,
              and optimize your stack in minutes.
            </p>
            <div className="flex gap-4 mt-6">

              <button className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-accent transition">
                <FaLinkedin size={18} />
              </button>

              <button className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-accent transition">
                <FaGithub size={18} />
              </button>

              <button className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-accent transition">
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                AI Audit
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Savings Reports
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Team Analytics
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Consultation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Case Studies
              </li>

              <li className="hover:text-white transition cursor-pointer">
                API
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-5">
              Weekly AI cost optimization tips directly in
              your inbox.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-accent"
              />

              <button className="w-full bg-accent hover:scale-[1.02] transition text-white py-4 rounded-2xl font-semibold shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 StackSage AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <button className="hover:text-white transition">
              Privacy Policy
            </button>

            <button className="hover:text-white transition">
              Terms
            </button>

            <button className="hover:text-white transition">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}