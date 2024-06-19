<div class="text-center hidden">
    <button id="openOverlayButton" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-notifications">
      Open modal
    </button>
  </div>
  
  <div id="hs-notifications" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
      <div class="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
        <div class="absolute top-2 end-2">
          <button type="button" class="closeModal flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700" data-hs-overlay="#hs-notifications">
            <span class="sr-only">Close</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
  
        <div class="p-4 sm:p-10 overflow-y-auto">
          <div class="mb-6 text-center">
            <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
              Medicine: <span id="med" class="text-blue-700 font-bold tracking-wider uppercase"></span>
            </h3>
            <p class="text-gray-500 dark:text-neutral-500">
              This is the student's who already taken that medicine.
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center" id="results">
           
  
            <!-- Card -->
            {{-- <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
              <label for="hs-meetups-near-you" class="flex p-4 md:p-5">
                <span class="flex me-5">
                  <svg class="flex-shrink-0 mt-1 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  
                  <span class="ms-5">
                    <span class="block font-medium text-gray-800 dark:text-neutral-200">Meetups Near You</span>
                    <span class="block text-sm text-gray-500 dark:text-neutral-500">Some Details of student here.</span>
                  </span>
                </span>
              </label>
            </div> --}}
            <!-- End Card -->
  
            
          </div>
        </div>

      </div>
    </div>
  </div>