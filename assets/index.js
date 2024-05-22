const data = [
    {
        "name": "Ontario",
        "flag": "assets/images/ontario_flag.png",
        "services": [
            {
                "name": "Adjunctive General Services",
                "service": [
                    {
                        "Nitrous Oxide and Oral Sedation": "$66.19 - $619.57"
                    }
                ]
            },
            {
                "name": "Diagnostic",
                "service": [
                    {
                        "First Dental Visit Orientation": "$50.63 - $60.76",
                        "Complete Oral Examination and Diagnosis": "$75.68 - $181.7",
                        "New Patient Limited": "$33.3 - $40.28",
                        "Recall Examination": "$34.49 - $41.39",
                        "Specific Examination": "$74.56 - $89.47",
                        "Emergency Examination": "$74.56 - $89.47",
                        "Specialist Examination and Diagnosis - Limited": "$42.22 - $63.49"
                    }
                ]
            },
            {
                "name": "Endodontics",
                "service": [
                    {
                        "Pulpotomy/Pulpectomy": "$66.41 - $247.3",
                        "Root Canal Therapy": "$513.87 - $1236.43",
                        "Open and Drain": "$61.81 - $76.54"
                    }
                ]
            },
            {
                "name": "Laboratory Tests",
                "service": [
                    {
                        "Lab Tests": "$80.73 - $209.24"
                    }
                ]
            },
            {
                "name": "Oral and Maxillofacial Surgery",
                "service": [
                    {
                        "Surgery Procedures": "$47.54 - $928.45"
                    }
                ]
            },
            {
                "name": "Orthodontics",
                "service": [
                    {
                        "Examination": "$68.33 - $2654.49",
                        "Diagnostic records": "$66.19 - $743.48"
                    }
                ]
            },
            {
                "name": "Periodontics",
                "service": [
                    {
                        "Management of Oral Disease": "$50.0 - $60.0",
                        "Miscellaneous": "$95.26 - $114.31",
                        "Root Planing": "$30.0 - $283.2"
                    }
                ]
            },
            {
                "name": "Prevention",
                "service": [
                    {
                        "Polishing": "$7.75 - $7.75",
                        "Scaling": "$30.0 - $283.2",
                        "Topical Fluoride": "$7.5 - $33.0",
                        "Sealants/Preventative Resins": "$19.0 - $61.48",
                        "Topical Application to Hard Tissue Lesion(s) of an Antimicrobial or Remineralization Agent": "$67.0 - $67.0"
                    }
                ]
            },
            {
                "name": "Prosthodontics - Removable",
                "service": [
                    {
                        "Complete Dentures - Standard": "$864.88 - $1698.28",
                        "Partial Acrylic Dentures": "$362.56 - $927.02",
                        "Partial Cast Dentures": "$525.76 - $1354.0",
                        "Denture Adjustments": "$72.53 - $87.04",
                        "Repairs and Additions": "$72.53 - $348.05",
                        "Reline or Rebase": "$87.04 - $565.58",
                        "Tissue Conditioning": "$145.04 - $267.17"
                    }
                ]
            },
            {
                "name": "Radiographs",
                "service": [
                    {
                        "Intraoral Radiographs, Complete series": "$133.21 - $143.58",
                        "Intraoral Radiographs (1-8 images)": "$29.08 - $80.82",
                        "Panoramic": "$67.88 - $67.88"
                    }
                ]
            },
            {
                "name": "Restoration",
                "service": [
                    {
                        "Caries, Trauma and Pain Control": "$34.12 - $139.02",
                        "Restoration, Amalgam/Composite; Prefabricated, Full Coverage": "$115.85 - $303.37",
                        "Prefabricated Posts": "$162.7 - $390.49",
                        "Post Removal": "$81.0 - $194.38",
                        "Repair to Crowns": "$86.1 - $348.62",
                        "Recementation of Crowns": "$72.2 - $86.64"
                    }
                ]
            }
        ]
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
    } 
]


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