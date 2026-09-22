import { NavLink, Outlet } from "react-router-dom"; 

export function DashboardLayout() { 
    return ( 
        <div className="min-h-screen bg-(--color-background-value) text-(--color-foreground-value)"> 
            <header className="border-b border-(--color-muted-value)/20"> 
                <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5"> 
                    <NavLink to="/" className="text-3xl font-semibold tracking-tight" > 
                        CapsuleIt 
                    </NavLink> 
                    <div className="flex items-center gap-6 text-xl"> 
                        <NavLink to="/capsules" className={({ isActive }) => `transition ${ isActive ? "text-(--color-primary-value)" : "text-(--color-muted-value) hover:text-(--color-foreground-value)" }` } > 
                            Capsules 
                        </NavLink> 
                        <NavLink to="/create" className={({ isActive }) => `transition ${ isActive ? "text-(--color-primary-value)" : "text-(--color-muted-value) hover:text-(--color-foreground-value)" }` } > 
                            Create 
                        </NavLink> 
                    </div> 
                </nav> 
            </header> 
            <main> 
                <Outlet /> 
            </main>
        </div>
    );
}