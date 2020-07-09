import React, { useState, useRef } from 'react'
import CanvasDraw from 'react-canvas-draw'

const brushColors = ['#f56565', '#81e69d', '#4299E1']

const Home = () => {
    const Canvas = useRef()
    const [isCanvasEnabled, setIsCanvasEnabled] = useState(false)
    const [brushColorIndex, setBrushColorIndex] = useState(0)

    const handleSubmit = () => {
        alert(
            `Doesn't do anything yet. Will save answers and drawing`
        )
    }

    const selectNewColor = () => {
        /**
         * Chooses next color in array
         */
        if (brushColorIndex + 1 === brushColors.length) {
            /**
             * Reset to beginning
             */
            setBrushColorIndex(0)
        } else {
            /**
             * Set to next color in array
             */
            setBrushColorIndex((currentIndex) => currentIndex + 1)
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-screen-xl mx-auto">
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
                            <p className="text-gray-700 pl-px antialiased">
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
                            className="text-lg font-semibold text-black bg-teal-300 px-6 py-2 rounded-full transform hover:scale-110"
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
                            style={{
                                transform: 'scale(-1, 1)',
                                transform: 'rotate(180deg)',
                            }}
                            src="https://img.pngio.com/up-hand-drawn-arrow-icons-download-free-vector-icons-noun-project-hand-drawn-arrows-png-200_200.png"
                        />
                    </div>
                    <div className="flex-1">
                        <p>
                            Bring your thoughts to life, draw all over
                            the image below.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <CanvasDraw
                            style={{
                                width: '100%',
                            }}
                            ref={(canvasObj) => {
                                Canvas.current = canvasObj
                            }}
                            onChange={() => setIsCanvasEnabled(true)}
                            brushColor={brushColors[brushColorIndex]}
                            brushRadius={5}
                            imgSrc="https://images.unsplash.com/photo-1504737105874-7b985700477b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        />
                        <div className="mt-3 flex justify-between">
                            <div className="flex items-center">
                                <button
                                    className="rounded-full px-3 py-1 bg-gray-300 text-black font-semibold transform hover:scale-110 mr-2"
                                    onClick={() =>
                                        Canvas.current.undo()
                                    }
                                >
                                    Undo
                                </button>
                                <button
                                    style={{
                                        backgroundColor:
                                            brushColors[
                                                brushColorIndex
                                            ],
                                    }}
                                    className="rounded-full h-8 w-8 transform hover:scale-110 border-2 border-white"
                                    onClick={() => selectNewColor()}
                                ></button>
                            </div>
                            <button
                                className={`flex flex-row items-center rounded-full px-3 py-1 bg-gray-300 text-black font-semibold transform hover:scale-110`}
                                onClick={() => Canvas.current.clear()}
                            >
                                <span className="w-5 h-5">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="css-i6dzq1"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </span>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
