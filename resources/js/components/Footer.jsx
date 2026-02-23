import React, { useState } from "react"

export default function Footer() {
    const [open, setOpen] = useState(false)

    return (
       <div className="mt-32 py-4 flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#project">Project</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="#">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="#">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="#">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="#">
                    <i className="ri-whatsapp-fill ri-2x"></i>
                </a>
            </div>
       </div>
    )
}




