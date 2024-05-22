const data = [
    {
        name: "Ontario",
        flag: "assets/images/ontario_flag.png",
        services: [
            {
                name: "Diagnostic",
                service: [
                    {
                        "First Dental Visit": "$50.67",
                        "Recall Examination": "$34.49",
                        "Emergency Examnination": "$74.56",
                    },
                ],
            },
            {
                name: "Prevention",
                service: [
                    {
                        "Polishing": "$7.75",
                    },
                ],
            },
        ],
    },
    {
        name: "British Columbia",
        flag: "assets/images/BC_flag.png",
        services: [
            {
                name: "Diagnostic",
                service: [
                    {
                        "First Dental Visit": "$42.64",
                        "Recall Examination": "$29.97",
                        "Emergency Examnination": "$54.95",
                    },
                ],
            },
        ],
    },
];


document.addEventListener("DOMContentLoaded", () => {
    const provinceSelect = document.getElementById("provinceSelect");
    const serviceSelect = document.getElementById("serviceSelect");
    const serviceDetails = document.getElementById("serviceDetails");
    const detailContainer = document.getElementsByClassName("detailContainer");

    const selectProvince = () => {
        // Populate the select options
        data.forEach((province) => {
            const option = document.createElement("option");
            option.value = province.name;
            option.setAttribute("imgData", province.flag);
            option.textContent = province.name;
            provinceSelect.appendChild(option);
        })
    };


    // Populate the select province service
    const selectService = (selectedProvince) => {
        serviceSelect.innerHTML = '<option value="">Select Service</option>'; // Clear previous options
        serviceDetails.innerHTML = "";
        const province = data.find((prov) => prov.name === selectedProvince);

        if (province) {
            province.services.forEach((service) => {
                const option = document.createElement("option");
                option.value = service.name;
                option.textContent = service.name;
                serviceSelect.appendChild(option);
            })
        }
    }

    // Trigger select services 

    provinceSelect.addEventListener("change", (e) => {
        selectService(e.target.value);
    });


    // Service select detail

    serviceSelect.addEventListener("change", function () {
        const selectedProvName = provinceSelect.value;
        const selectedServiceName = this.value;
        const selectedProvince = data.find(province => province.name === selectedProvName);
        const selectedProvflag = provinceSelect.options[provinceSelect.selectedIndex].getAttribute('imgData');
        const textWrapper = document.createElement("div");
        textWrapper.className = "textWrapper";


        if (selectedProvince) {
            const selectedService = selectedProvince.services.find(service => service.name === selectedServiceName);

            if (selectedService) {
                const serviceDetailsContent = selectedService.service[0]; // Assuming each service has a single details object
                serviceDetails.innerHTML = `<img src="${selectedProvflag}"/><h1>${selectedProvName} Service Details</h1><h2>${selectedServiceName}</h2>`;


                for (const [service_title, price] of Object.entries(serviceDetailsContent)) {
                    const detail = document.createElement("p");
                    detail.innerHTML = `<span>${service_title}:</span> ${price}`;
                    textWrapper.append(detail)
                    serviceDetails.appendChild(textWrapper);
                }
            }

        }
    });

    selectService();
    selectProvince();

});



