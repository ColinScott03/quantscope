export default function Header() {
    return(
        <div className="flex bg-[#011121] h-30 absolute top-0 left-0 w-screen justify-between items-center p-5">
            <img src="logo.png" className="h-25"></img>
            <nav className="flex space-x-6">
                <a href="/dashboard">Dashboard</a>
                <a href="/calculator">Calculator</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/risk">Risk</a>
                <a href="/insights">AI Insights</a>
            </nav>
        </div>
    )
}