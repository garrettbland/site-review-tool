import React from 'react'
import CanvasDraw from 'react-canvas-draw'

const Home = () => {
    const handleSubmit = () => {
        alert(`Doesn't do anything yet 🥺`)
    }

    const handleDraw = () => {
        alert(`Don't yell at me, it does nothing`)
    }

    return (
        <div className="grid grid-cols-2 gap-1 max-w-screen-xl mx-auto">
            <div className="p-6">
                <div className="card--body p-6">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold leading-tight">
                            Review
                        </h1>
                        <p>
                            Answer any questions below and draw all
                            over
                        </p>
                    </div>
                    <div className="mb-6">
                        <div>
                            <label className="font-semibold block text-lg py-2">
                                Do you like the snowy mountains?
                                <span className="pl-2 text-red-500">
                                    *
                                </span>
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Your answer & comments here"
                                className="bg-white focus:bg-yellow-100 resize-none w-full border border-gray-200 rounded-lg focus:outline-none p-3 focus:border-gray-900"
                            />
                            <p class="text-gray-700 pl-px antialiased">
                                Extra instructions could go here
                            </p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div>
                            <label className="font-semibold block text-lg py-2">
                                General comments{' '}
                                <span className="italic">or</span>{' '}
                                suggestions?
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Your answer & comments here"
                                className="bg-white focus:bg-yellow-100 resize-none w-full border border-gray-200 rounded-lg focus:outline-none p-3 focus:border-gray-900"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => handleSubmit()}
                            className="text-lg font-semibold text-black bg-teal-300 px-6 py-2 rounded-full transform hover:-rotate-5"
                        >
                            Sumbit Review
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="mb-6 flex flex-row relative">
                    <div className="w-12 h-8">
                        <img
                            className="transform rotate-180"
                            src="https://img.pngio.com/up-hand-drawn-arrow-icons-download-free-vector-icons-noun-project-hand-drawn-arrows-png-200_200.png"
                        />
                    </div>
                    <div className="flex-1">
                        <p>
                            Bring your thoughts to life. Click on the
                            pen tool to draw all over.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <button
                        onClick={() => handleDraw()}
                        className="w-10 h-10 bg-indigo-500 text-white shadow-xl rounded-full p-2 absolute top-0 left-0 -ml-4 -mt-4 transform hover:scale-110 -rotate-6 hover:-rotate-11 z-20"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="css-i6dzq1"
                        >
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                    </button>
                    <div className="z-10">
                        <CanvasDraw
                            style={{
                                width: '100%',
                            }}
                            brushColor="rgba(245, 75, 66, 0.9)"
                            brushRadius="5"
                            imgSrc="https://images.unsplash.com/photo-1504737105874-7b985700477b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
