
const body = document.querySelector('body');

// buscar que pag esta
// console.log(window.location.pathname);

// PANTALLA HOME 
    const createNav = () => {
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    nav.classList.add('bg-red-800', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
    nav.innerHTML = `
    
    <div class="flex justify-between items-center h-full px-4 ">
    <h1 class="text-white dark:text-white text-xl uppercase font-bold">Gas Comunal</h1>
    

    <!-- Desktop layout -->
    <div class=" hidden md:flex gap-4 p-4">
        <a href="/signup/" class="hover:bg-gray-500 hover:dark:bg-zinc-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">REGISTRAR</a>
        <a href="/login/" class="hover:bg-gray-500 hover:dark:bg-zinc-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">INICIAR SESIÓN</a>

    </div>

    <!-- Mobile layout -->
    <!-- Btn mobile -->
    <svg id="nav-btn" class="md:hidden text-white w-8 h-8 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      <!-- Sidebar mobile -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-300/70 dark:bg-slate-900/60 backdrop-blur-sm easy-in duration-500">
        <div class="absolute bg-zinc-100 w-[60%] right-0 dark:bg-slate-700 top-0 bottom-0 flex flex-col gap-4 p-4">
            <a href="/signup/" class="hover:bg-red-200 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">REGISTRAR</a>
            <a href="/login/" class="hover:bg-red-200 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">INICIAR SESIÓN</a>
            
        </div>
      </div>
</div>
    
    `;
    const navBtn = nav.children[0].children[2];
    const navSidebar = nav.children[0].children[3];
    // console.log(navBtn, navSidebar);
    navBtn.addEventListener('click', e => {
        if(navSidebar.classList.contains('w-[0%]')){
            navSidebar.classList.remove('w-[0%]', '-right-8');
            navSidebar.classList.add('w-full', 'right-0');
        } else{
            navSidebar.classList.add('w-[0%]', '-right-8');
            navSidebar.classList.remove('w-full', 'right-0');
        }
    });
    body.append(nav);
};



// PANTALLA SIGNUP
const createNavSignup = () => {
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    nav.classList.add('bg-red-800', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
    nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
    <h1 class="text-white dark:text-white text-xl uppercase font-bold">Registro de usuario</h1>
   
    <!-- Desktop layout -->
    <div class=" hidden md:flex gap-4 p-4">
    <a href="/home/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">INICIO</a>
        <a href="/login/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">INICIAR SESIÓN</a>
    </div>
    
    <!-- Mobile layout -->
    <!-- Btn mobile -->
    <svg id="nav-btn" class="md:hidden text-white w-8 h-8 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      <!-- Sidebar mobile (barra lateral) -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-300/70 dark:bg-slate-900/60 backdrop-blur-sm easy-in duration-500">
        <div class="absolute bg-zinc-100 w-[60%] right-0 dark:bg-slate-700 top-0 bottom-0 flex flex-col gap-4 p-4">
        <a href="/home/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">INICIO</a>
        <a href="/login/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">INICIAR SESIÓN</a>
            
        </div>
      </div>
</div>
    
    `;
    const navBtn = nav.children[0].children[2];
    const navSidebar = nav.children[0].children[3];
    // console.log(navBtn, navSidebar);
    navBtn.addEventListener('click', e => {
        if(navSidebar.classList.contains('w-[0%]')){
            navSidebar.classList.remove('w-[0%]', '-right-8');
            navSidebar.classList.add('w-full', 'right-0');
        } else{
            navSidebar.classList.add('w-[0%]', '-right-8');
            navSidebar.classList.remove('w-full', 'right-0');
        }
    });
    body.append(nav);
};


                    // PANTALLA LOGIN
const createNavLogin = () => {
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    nav.classList.add('bg-red-800', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
    nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
    <h1 class="text-white dark:text-white text-xl uppercase font-bold">INICIO DE SESIÓN</h1>

    <!-- Desktop layout -->
    <div class=" hidden md:flex gap-4 p-4">
        <a href="/home/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">INICIO</a>
        <a href="/signup/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">REGISTRAR</a>
    </div>

    <!-- Mobile layout -->
    <!-- Btn mobile -->
    <svg id="nav-btn" class="md:hidden text-white w-8 h-8 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      <!-- Sidebar mobile (barra lateral) -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-300/70 dark:bg-slate-900/60 backdrop-blur-sm easy-in duration-500">
        <div class="absolute bg-zinc-100 w-[60%] right-0 dark:bg-slate-700 top-0 bottom-0 flex flex-col gap-4 p-4">
            <a href="/home/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">INICIO</a>
            <a href="/signup/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">REGISTRAR</a>

        </div>
      </div>
</div>
    
    `;
    const navBtn = nav.children[0].children[2];
    const navSidebar = nav.children[0].children[3];
    // console.log(navBtn, navSidebar);
    navBtn.addEventListener('click', e => {
        if(navSidebar.classList.contains('w-[0%]')){
            navSidebar.classList.remove('w-[0%]', '-right-8');
            navSidebar.classList.add('w-full', 'right-0');
        } else{
            navSidebar.classList.add('w-[0%]', '-right-8');
            navSidebar.classList.remove('w-full', 'right-0');
        }
    });
    body.append(nav);
};

// PANTALLA NAV
const A = () => {
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    nav.classList.add('bg-red-800', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
    nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
    <h1 class="text-white dark:text-white text-xl uppercase font-bold">Registro de usuario</h1>

    <!-- Desktop layout--Diseño de escritorio-->
    <div class=" hidden md:flex gap-4 p-4">
        <a href="/login/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">INICIAR SESIÓN</a>
        <a href="/login/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">INICIArrrrrR SESIÓN</a>
    </div>

    <!-- Mobile layout--diseño movil-->
    <!-- Btn mobile -->
    <svg id="nav-btn" class="md:hidden text-white w-8 h-8 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      <!-- Sidebar mobile (barra lateral) -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-300/70 dark:bg-slate-900/60 backdrop-blur-sm easy-in duration-500">
        <div class="absolute bg-zinc-100 w-[60%] right-0 dark:bg-slate-700 top-0 bottom-0 flex flex-col gap-4 p-4">
            <a href="/login/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">INICIAR SESIÓN</a>

        </div>
      </div>
</div>
    
    `;
    const navBtn = nav.children[0].children[2];
    const navSidebar = nav.children[0].children[3];
    // console.log(navBtn, navSidebar);
    navBtn.addEventListener('click', e => {
        if(navSidebar.classList.contains('w-[0%]')){
            navSidebar.classList.remove('w-[0%]', '-right-8');
            navSidebar.classList.add('w-full', 'right-0');
        } else{
            navSidebar.classList.add('w-[0%]', '-right-8');
            navSidebar.classList.remove('w-full', 'right-0');
        }
    });
    body.append(nav);
};

                // PANTALLA CDT
    const createNavCdt = () => {
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    nav.classList.add('bg-red-800', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
    nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
    <h1 class="text-white dark:text-white text-xl uppercase font-bold">Centro de Trabajo</h1>

    <!-- Desktop layout -->
    <div class=" hidden md:flex gap-4 p-4">
        <a href="/cdt/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">SOLICITUDES</a>
        <a href="/exit/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">SALIR</a>
    </div>

    <!-- Mobile layout -->
    <!-- Btn mobile -->
    <svg id="nav-btn" class="md:hidden text-white w-8 h-8 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      <!-- Sidebar mobile (barra lateral) -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-300/70 dark:bg-slate-900/60 backdrop-blur-sm easy-in duration-500">
        <div class="absolute bg-zinc-100 w-[60%] right-0 dark:bg-slate-700 top-0 bottom-0 flex flex-col gap-4 p-4">
            <a href="/cdt/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">SOLICITUDES</a>
            <a href="/exit/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">SALIR</a>
        </div>
      </div>
</div>
    
    `;
    const navBtn = nav.children[0].children[2];
    const navSidebar = nav.children[0].children[3];
    // console.log(navBtn, navSidebar);
    navBtn.addEventListener('click', e => {
        if(navSidebar.classList.contains('w-[0%]')){
            navSidebar.classList.remove('w-[0%]', '-right-8');
            navSidebar.classList.add('w-full', 'right-0');
        } else{
            navSidebar.classList.add('w-[0%]', '-right-8');
            navSidebar.classList.remove('w-full', 'right-0');
        }
    });
    body.append(nav);
};

// const loginNav = () => {

// }

const createNavVocero = () => {
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    nav.classList.add('bg-red-800', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
    nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
    <h1 class="text-white dark:text-white text-xl uppercase font-bold">Centro de Vocero Parroquial</h1>

    <!-- Desktop layout -->
    <div class=" hidden md:flex gap-4 p-4">
        <a href="/vocero/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">REALIZAR SOLICITUD</a>
        <a href="/exit/" class="hover:bg-gray-500 hover:dark:bg-red-700 rounded-lg p-2 font-semibold dark:text-white text-white easy-in duration-300">SALIR</a>
    </div>

    <!-- Mobile layout -->
    <!-- Btn mobile -->
    <svg id="nav-btn" class="md:hidden text-white w-8 h-8 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      <!-- Sidebar mobile (barra lateral) -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-300/70 dark:bg-slate-900/60 backdrop-blur-sm easy-in duration-500">
        <div class="absolute bg-zinc-100 w-[60%] right-0 dark:bg-slate-700 top-0 bottom-0 flex flex-col gap-4 p-4">
            <a href="/vocero/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">REALIZAR SOLICITUD</a>
            <a href="/exit/" class="hover:bg-gray-300 hover:dark:bg-slate-600 rounded-lg p-2 font-semibold dark:text-white text-zinc-700 easy-in duration-300">SALIR</a>
        </div>
      </div>
</div>
    
    `;
    const navBtn = nav.children[0].children[2];
    const navSidebar = nav.children[0].children[3];
    // console.log(navBtn, navSidebar);
    navBtn.addEventListener('click', e => {
        if(navSidebar.classList.contains('w-[0%]')){
            navSidebar.classList.remove('w-[0%]', '-right-8');
            navSidebar.classList.add('w-full', 'right-0');
        } else{
            navSidebar.classList.add('w-[0%]', '-right-8');
            navSidebar.classList.remove('w-full', 'right-0');
        }
    });
    body.append(nav);
};

if (window.location.pathname === '/home/') {
    createNav()
} else if (window.location.pathname === '/signup/'){
    createNavSignup();
}else if (window.location.pathname === '/login/'){
    createNavLogin();
}else if (window.location.pathname === '/cdt/'){
    createNavCdt();
}else if (window.location.pathname === '/vocero/')
createNavVocero();