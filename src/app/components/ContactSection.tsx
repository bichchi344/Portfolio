'use client'
import {
  Phone,
  Mail,
  MessageCircleMore,
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen px-4 py-20 bg-gradient-to-b from-gray-50/0 to-gray-100/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">CONTACT ME</h2>
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <Phone className="text-blue-300 w-8 h-8 mb-2" />
            <p className="text-gray-300 font-medium">0338 481 344</p>
            <span className="text-sm text-gray-400">Phone</span>
          </div>

          <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <Mail className="text-blue-300 w-8 h-8 mb-2" />
            <p className="text-gray-300 font-medium">bichchi1211@gmail.com</p>
            <span className="text-sm text-gray-400">Email</span>
          </div>

          <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <MessageCircleMore className="text-blue-300 w-8 h-8 mb-2" />
            <p className="text-gray-300 font-medium">bichchi1211@outlook.com</p>
            <span className="text-sm text-gray-400">Teams</span>
          </div>
        </div>
      </div>
    </section>
  );
}
