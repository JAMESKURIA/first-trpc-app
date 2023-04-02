/* eslint-disable jsx-a11y/control-has-associated-label */
const Table = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Card --> */}
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                            {/* <!-- Header --> */}
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        API Keys
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Keys you have generated to connect with
                                        third-party clients or access the{' '}
                                        <a
                                            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                                            href="#."
                                        >
                                            Preline API.
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <a
                                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                            href="#."
                                        >
                                            View all
                                        </a>

                                        <a
                                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                            href="#."
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            Create
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Header --> */}

                            {/* <!-- Table --> */}
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="pl-6 py-3 text-left"
                                        >
                                            <label
                                                htmlFor="hs-at-with-checkboxes-main"
                                                className="flex"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-main"
                                                />
                                                <span className="sr-only">
                                                    Checkbox
                                                </span>
                                            </label>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Name
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Created by
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    API Key
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Status
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Created
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right"
                                        />
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="pl-6 py-3">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-1"
                                                    className="flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-1"
                                                    />
                                                    <span className="sr-only">
                                                        Checkbox
                                                    </span>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    Streamlab
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        className="inline-block h-6 w-6 rounded-full"
                                                        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                                        alt=" Description"
                                                    />
                                                    <div className="grow">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            Christina Bersh
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center gap-x-2.5 py-2 px-2.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                                >
                                                    Copy Key
                                                    <svg
                                                        className="h-3.5 w-3.5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                    <svg
                                                        className="w-2.5 h-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Successful
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    28 Dec, 12:12
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button
                                                        id="hs-table-dropdown-1"
                                                        type="button"
                                                        className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                        aria-labelledby="hs-table-dropdown-1"
                                                    >
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Rename
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Regenrate Key
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Disable
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                                                href="#."
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="pl-6 py-3">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-2"
                                                    className="flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-2"
                                                    />
                                                    <span className="sr-only">
                                                        Checkbox
                                                    </span>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    Node
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        className="inline-block h-6 w-6 rounded-full"
                                                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                                        alt=" Description"
                                                    />
                                                    <div className="grow">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            David Harrison
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center gap-x-2.5 py-2 px-2.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                                >
                                                    Copy Key
                                                    <svg
                                                        className="h-3.5 w-3.5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200">
                                                    <svg
                                                        className="w-2.5 h-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                    Warning
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    20 Dec, 09:27
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button
                                                        id="hs-table-dropdown-2"
                                                        type="button"
                                                        className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                        aria-labelledby="hs-table-dropdown-2"
                                                    >
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Rename
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Regenrate Key
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Disable
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                                                href="#."
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="pl-6 py-3">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-3"
                                                    className="flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-3"
                                                    />
                                                    <span className="sr-only">
                                                        Checkbox
                                                    </span>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    FrontMail
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700">
                                                        <span className="text-xs font-medium text-gray-800 leading-none dark:text-gray-200">
                                                            A
                                                        </span>
                                                    </span>
                                                    <div className="grow">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            Anne Richard
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center gap-x-2.5 py-2 px-2.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                                >
                                                    Copy Key
                                                    <svg
                                                        className="h-3.5 w-3.5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                    <svg
                                                        className="w-2.5 h-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Successful
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    18 Dec, 15:20
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button
                                                        id="hs-table-dropdown-3"
                                                        type="button"
                                                        className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                        aria-labelledby="hs-table-dropdown-3"
                                                    >
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Rename
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Regenrate Key
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Disable
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                                                href="#."
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="pl-6 py-3">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-4"
                                                    className="flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-4"
                                                    />
                                                    <span className="sr-only">
                                                        Checkbox
                                                    </span>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    MobileAPI
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        className="inline-block h-6 w-6 rounded-full"
                                                        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                                                        alt=" Description"
                                                    />
                                                    <div className="grow">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            Samia Kartoon
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center gap-x-2.5 py-2 px-2.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                                >
                                                    Copy Key
                                                    <svg
                                                        className="h-3.5 w-3.5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                    <svg
                                                        className="w-2.5 h-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Successful
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    18 Dec, 15:20
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button
                                                        id="hs-table-dropdown-4"
                                                        type="button"
                                                        className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                        aria-labelledby="hs-table-dropdown-4"
                                                    >
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Rename
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Regenrate Key
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Disable
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                                                href="#."
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="pl-6 py-3">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-5"
                                                    className="flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-5"
                                                    />
                                                    <span className="sr-only">
                                                        Checkbox
                                                    </span>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    RachelsKey
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700">
                                                        <span className="text-xs font-medium text-gray-800 leading-none dark:text-gray-200">
                                                            D
                                                        </span>
                                                    </span>
                                                    <div className="grow">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            David Harrison
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center gap-x-2.5 py-2 px-2.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                                >
                                                    Copy Key
                                                    <svg
                                                        className="h-3.5 w-3.5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                                                    <svg
                                                        className="w-2.5 h-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                    Danger
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    15 Dec, 14:41
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button
                                                        id="hs-table-dropdown-5"
                                                        type="button"
                                                        className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                        aria-labelledby="hs-table-dropdown-5"
                                                    >
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Rename
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Regenrate Key
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Disable
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                                                href="#."
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="pl-6 py-3">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-6"
                                                    className="flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-6"
                                                    />
                                                    <span className="sr-only">
                                                        Checkbox
                                                    </span>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    Gulp
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        className="inline-block h-6 w-6 rounded-full"
                                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                                        alt=" Description"
                                                    />
                                                    <div className="grow">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            Brian Halligan
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center gap-x-2.5 py-2 px-2.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                                >
                                                    Copy Key
                                                    <svg
                                                        className="h-3.5 w-3.5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                    <svg
                                                        className="w-2.5 h-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Successful
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    11 Dec, 18:51
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button
                                                        id="hs-table-dropdown-6"
                                                        type="button"
                                                        className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                        aria-labelledby="hs-table-dropdown-6"
                                                    >
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Rename
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Regenrate Key
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                                href="#."
                                                            >
                                                                Disable
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a
                                                                className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                                                href="#."
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- End Table --> */}

                            {/* <!-- Footer --> */}
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                                            6
                                        </span>{' '}
                                        results
                                    </p>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <button
                                            type="button"
                                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                                />
                                            </svg>
                                            Prev
                                        </button>

                                        <button
                                            type="button"
                                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        >
                                            Next
                                            <svg
                                                className="w-3 h-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Footer --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Card --> */}
        </div>
    )
}

export default Table
