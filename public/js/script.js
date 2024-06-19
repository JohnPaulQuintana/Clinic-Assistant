console.log("Connected now!");
$(document).ready(function () {
    // Predefined data about medications and students who have taken them
    const medicationData = {
        paracetamol: [
            "John Doe",
            "Jane Smith",
            "Alice Johnson",
            "Samuel Carter",
            "Sophia Thompson",
            "Ethan Harris",
            "Isabella Martin",
            "Michael Lewis",
            "Charlotte White",
            "James Walker",
        ],
        ibuprofen: [
            "Michael Brown",
            "Emily Davis",
            "Daniel Young",
            "Grace King",
            "Henry Scott",
            "Mia Turner",
            "Christopher Lopez",
            "Ava Hill",
            "Joshua Green",
            "Sophia Adams",
        ],
        amoxicillin: [
            "David Wilson",
            "Olivia Martinez",
            "Benjamin Robinson",
            "Lily Clark",
            "Lucas Rodriguez",
            "Aria Lee",
            "Mason Lewis",
            "Ella Hall",
            "Alexander Allen",
            "Harper Wright",
        ],
        acetaminophen: [
            "Liam Thomas",
            "Mila Harris",
            "Noah Perez",
            "Scarlett Baker",
            "Logan Rivera",
            "Abigail Mitchell",
            "Jacob Carter",
            "Madison Roberts",
            "William Walker",
            "Avery Nelson",
        ],
        aspirin: [
            "Oliver Young",
            "Evelyn Hill",
            "Elijah Green",
            "Victoria Adams",
            "Sebastian Hall",
            "Ella Allen",
            "Aiden Wright",
            "Grace Lee",
            "Matthew Scott",
            "Chloe Turner",
        ],
        penicillin: [
            "Jackson Anderson",
            "Zoey Perez",
            "Gabriel Hernandez",
            "Layla Baker",
            "Ethan Ramirez",
            "Sofia Martinez",
            "Carter Lee",
            "Nora Young",
            "Isaiah Hernandez",
            "Lillian King",
        ],
        metformin: [
            "Jayden White",
            "Zoe Rodriguez",
            "Owen King",
            "Hannah Harris",
            "Dylan Martinez",
            "Ellie Rivera",
            "Luke White",
            "Violet Martinez",
            "Alexander Harris",
            "Aubrey Walker",
        ],
        lisinopril: [
            "Caleb Allen",
            "Lily Young",
            "Nathan Turner",
            "Stella Thompson",
            "Christian Clark",
            "Grace Harris",
            "Julian Anderson",
            "Aurora Martinez",
            "Isaac Hall",
            "Penelope Lee",
        ],
        atorvastatin: [
            "Anthony Lee",
            "Camila Lewis",
            "Levi Walker",
            "Lucy Roberts",
            "Jack Lewis",
            "Nora Clark",
            "Samuel Walker",
            "Zoey Scott",
            "Wyatt Rivera",
            "Savannah Hill",
        ],
        omeprazole: [
            "Gabriel Scott",
            "Eleanor Hall",
            "David Martinez",
            "Madeline Young",
            "Christopher Adams",
            "Hazel Harris",
            "Andrew Young",
            "Lila Martinez",
            "Josiah Clark",
            "Bella Hill",
        ],
        hydrochlorothiazide: [
            "Jonathan Lee",
            "Hannah Scott",
            "Eli Walker",
            "Riley Harris",
            "Isaiah Martinez",
            "Paisley Allen",
            "Hunter Clark",
            "Luna Lee",
            "Levi Walker",
            "Violet Turner",
        ],
        amlodipine: [
            "Charles Walker",
            "Aubrey Harris",
            "Thomas Allen",
            "Ariana Clark",
            "Evan Young",
            "Ellie Lee",
            "Henry Martinez",
            "Avery Young",
            "James Anderson",
            "Emma Harris",
        ],
        furosemide: [
            "Ryan Walker",
            "Luna Clark",
            "Adam Harris",
            "Layla Young",
            "Joshua Thompson",
            "Charlotte Martinez",
            "Nolan Clark",
            "Aria Lee",
            "Ethan Allen",
            "Mia Walker",
        ],
        simvastatin: [
            "Cooper Young",
            "Hannah Adams",
            "Miles Harris",
            "Isabella Clark",
            "Brayden Walker",
            "Amelia Martinez",
            "Luke Adams",
            "Emily Harris",
            "Julian Young",
            "Mila Lee",
        ],
        levothyroxine: [
            "James Walker",
            "Zoey Thompson",
            "Sebastian Harris",
            "Mia Martinez",
            "Caleb Lee",
            "Aria Young",
            "Connor Harris",
            "Layla Clark",
            "Elijah Walker",
            "Isla Harris",
        ],
        clopidogrel: [
            "Mason Martinez",
            "Ella Lee",
            "Carter Walker",
            "Avery Young",
            "Jackson Harris",
            "Violet Clark",
            "Landon Lee",
            "Scarlett Martinez",
            "Dylan Harris",
            "Harper Young",
        ],
        prednisone: [
            "Benjamin Harris",
            "Lily Young",
            "Owen Martinez",
            "Sofia Clark",
            "Eli Walker",
            "Riley Harris",
            "Hunter Young",
            "Paisley Lee",
            "Josiah Martinez",
            "Penelope Harris",
        ],
        azithromycin: [
            "Nolan Walker",
            "Madeline Young",
            "Caleb Lee",
            "Hazel Harris",
            "Miles Martinez",
            "Luna Clark",
            "Wyatt Walker",
            "Aubrey Young",
            "Isaiah Harris",
            "Bella Lee",
        ],
        albuterol: [
            "Charles Martinez",
            "Charlotte Young",
            "David Lee",
            "Madeline Harris",
            "Andrew Walker",
            "Eleanor Young",
            "Jonathan Harris",
            "Stella Clark",
            "Christopher Lee",
            "Lucy Martinez",
        ],
        metoprolol: [
            "Jackson Walker",
            "Aurora Young",
            "James Harris",
            "Ella Martinez",
            "Ryan Lee",
            "Lila Harris",
            "Gabriel Young",
            "Grace Clark",
            "Hunter Martinez",
            "Hannah Young",
        ],
        // Add more medications and students as needed
    };

    // console.log(medicationKeys);

    let synth = window.speechSynthesis;
    let voices = [];
    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
    };

    $(document).keypress(function (event) {
        if (event.which == 13) {
            // 13 is the key code for Enter
            console.log("Enter key was pressed.");
            const query = $("#query").val();
            console.log(query);
            if (query.trim() !== "") {
                getResponse(query);
            }
        }
    });

    function getResponse(query) {
        const lowerCaseQuery = query.toLowerCase();
        const response = getMedicationResponse(lowerCaseQuery);
        if (!response) {
            // document.getElementById('response').innerText = response;
            // speakResponse(response).then(()=>{stopSpeech()}).catch(error=>{stopSpeech()});
            const noInfoResponse =
                "Sorry, I don't have information about that medication.";
            // document.getElementById('response').innerText = noInfoResponse;
            speakResponse(noInfoResponse)
                .then(() => {
                    stopSpeech();
                })
                .catch((error) => {
                    stopSpeech();
                });
        } //else {
        //     const noInfoResponse = "Sorry, I don't have information about that medication.";
        //     // document.getElementById('response').innerText = noInfoResponse;
        //     speakResponse(noInfoResponse).then(()=>{stopSpeech()}).catch(error=>{stopSpeech()});
        // }
    }

    function getMedicationResponse(query) {
        for (let medication in medicationData) {
            if (query.includes(medication)) {
                const students = medicationData[medication];
                const message = `The students who have taken ${medication} are: .`;
                $("#query").val("");
                speakResponse(message)
                    .then(() => {
                        triggerResult(medication, students, message);
                    })
                    .catch((error) => {
                        stopSpeech();
                    });

                return `The students who have taken ${medication} are: .`;
            }
        }
        return null;
    }

    function speakResponse(text) {
        return new Promise((resolve, reject) => {
            const utterance = new SpeechSynthesisUtterance(text);

            // Wait until voices are loaded
            if (voices.length === 0) {
                voices = synth.getVoices();
            }

            let femaleVoice = voices.find(
                (voice) =>
                    voice.name.includes("Google UK English Female") ||
                    voice.name.includes("Google US English Female")
            );

            if (!femaleVoice) {
                // Fallback to first female voice if specific Google voice not found
                femaleVoice = voices.find((voice) =>
                    voice.name.includes("Female")
                );
            }

            if (femaleVoice) {
                utterance.voice = femaleVoice;
                utterance.pitch = 1;
                utterance.rate = 1;

                // Event listener for when speech synthesis has finished
                utterance.onend = function () {
                    console.log("Speech synthesis finished.");
                    resolve();
                };

                // Event listener for error
                utterance.onerror = function (error) {
                    console.error("Speech synthesis error:", error);
                    reject(error);
                };

                synth.speak(utterance);
            } else {
                const error = new Error("No female voice available");
                console.error(error.message);
                reject(error);
            }
        });
    }

    function stopSpeech() {
        if (synth.speaking) {
            synth.cancel();
        }
    }

    function triggerResult(medication, students) {
        // Trigger modal after all students are spoken and rendered
        $("#openOverlayButton").trigger("click");
        // Remove all previously appended elements
        $("#results").empty();
        let studentIndex = 0;
        function renderNextStudent() {
            if (studentIndex < students.length) {
                const renderStudent = `
                            <!-- Card -->
                            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                                <label for="hs-meetups-near-you" class="flex p-4 md:p-5">
                                    <span class="flex me-5">
                                        <svg class="flex-shrink-0 mt-1 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                        <span class="ms-5">
                                            <span class="block font-medium text-gray-800 dark:text-neutral-200">${students[studentIndex]}</span>
                                            <span class="block text-sm text-gray-500 dark:text-neutral-500">Some Details of student here.</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <!-- End Card -->
                        `;

                $("#med").text(medication);
                $("#results").append(renderStudent);
                // Wait for a brief delay before speaking the student's name
                setTimeout(() => {
                    speakResponse(students[studentIndex])
                        .then(() => {
                            studentIndex++;
                            renderNextStudent();
                        })
                        .catch((error) => {
                            console.error(
                                "Error during speech synthesis:",
                                error
                            );
                        });
                }, 500);
            } //else {
            //     // Trigger modal after all students are spoken and rendered
            //     $('#openOverlayButton').trigger('click');
            // }
        }

        renderNextStudent();
    }

    function trigerMedicine(medicines) {
        $("#medicineOverlayButton").trigger("click");
        // Remove all previously appended elements
        $("#available-results").empty();
        let medIndex = 0;
        console.log(medicines.length);
        function renderNextMedicine() {
            if (medIndex < medicines.length) {
                const renderMedicine = `
                            <!-- Card -->
                            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                                <label for="hs-meetups-near-you" class="flex p-4 md:p-5">
                                    <span class="flex me-5">
                                        <i class="fa-solid fa-capsules flex-shrink-0 mt-1 size-5 text-gray-500 dark:text-neutral-500"></i>
                                        <span class="ms-5">
                                            <span class="block font-medium text-gray-800 dark:text-neutral-200">${medicines[medIndex]}</span>
                                            <span class="block text-sm text-gray-500 dark:text-neutral-500">Some Details of medicine here.</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <!-- End Card -->
                        `;

                $("#available-results").append(renderMedicine);
                // Wait for a brief delay before speaking the student's name
                setTimeout(() => {
                    speakResponse(medicines[medIndex])
                        .then(() => {
                            medIndex++;
                            renderNextMedicine();
                        })
                        .catch((error) => {
                            console.error(
                                "Error during speech synthesis:",
                                error
                            );
                        });
                }, 500);
            } //else {
            //     // Trigger modal after all students are spoken and rendered
            //     $('#openOverlayButton').trigger('click');
            // }
        }

        speakResponse("Here is the list of available medicine records!")
            .then(() => {
                renderNextMedicine();
            })
            .catch((error) => {
                stopSpeech();
            });
    }

    //close modal
    $(".closeModal").click(function () {
        // alert('yes')
        stopSpeech();
    });

    // open available medicine
    $("#medicineShow").click(function () {
        // alert('click')
        let medicationKeys = Object.keys(medicationData);
        console.log(medicationKeys);
        trigerMedicine(medicationKeys);
    });
});
