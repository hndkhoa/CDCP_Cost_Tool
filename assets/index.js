const data = [
    {
        "name": "Ontario",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg",
        "services": [
            {
                "name": "Diagnostic",
                "serviceA": [
                    {
                        "First Dental Visit Orientation": "$50.63 - $60.76",
                        "Complete Oral Examination and Diagnosis": "$75.68 - $181.70",
                        "New Patient Limited": "$33.30 - $40.28",
                        "Recall Examination": "$34.49 - $41.39",
                        "Specific Examination": "$74.56 - $89.47",
                        "Emergency Examination": "$74.56 - $89.47",
                        "Specialist Examination and Diagnosis - Limited": "$45.70 - $63.49",
                        "Intraoral Radiographs, Complete series": "$133.21 - $143.58",
                        "Intraoral Radiographs (1-8 images)": "$29.08 - $80.82",
                        "Panoramic": "$67.88",
                        "Laboratory Tests": "$80.73 - $209.24"
                    }
                ],
                "serviceB": [
                    {
                        "Specialist Examination and Diagnosis Complete": "$168.29 - $244.79",
                        "Laboratory Tests": "$62.50 - $81.36",
                        "Diagnostic Casts, Unmounted": "$36.00 - $66.90"
                    }
                ]
            },
            {
                "name": "Prevention",
                "serviceA": [
                    {
                        "Polishing": "$7.75",
                        "Scaling": "$63 - $283.20",
                        "Topical Fluoride": "$7.50 - $33.00",
                        "Sealants/Preventative Resins": "$19.00 - $61.48",
                        "Topical Application to Hard Tissue Lesion(s) of an Antimicrobial or Remineralization Agent": "$67.00"
                    }
                ],
                "serviceB": [
                    {
                        "Interproximal Disking of Teeth": "$39.00"
                    }
                ]
            },
            {
                "name": "Restoration",
                "serviceA": [
                    {
                        "Caries, Trauma and Pain Control": "$34.12 - $139.02",
                        "Restoration, Amalgam/Composite; Prefabricated, Full Coverage": "$24.69 - $401.75",
                        "Prefabricated Posts": "$160.00 - $390.49",
                        "Post Removal": "$81.00 - $194.38",
                        "Repair to Crowns": "$86.10 - $348.62",
                        "Recementation of Crowns": "$72.20 - $86.64"
                    }
                ],
                "serviceB": [
                    {
                        "Cores and Posts": "$301.67 - $497.76",
                        "Crowns": "$738.11 - $971.98"
                    }
                ]
            },
            {
                "name": "Endodontics",
                "serviceA": [
                    {
                        "Pulpotomy/Pulpectomy": "$66.41 - $430.10",
                        "Root Canal Therapy": "$513.87 - $1,236.43",
                        "Open and Drain": "$61.81 - $76.54"
                    }
                ],
                "serviceB": [
                    {
                        "Root Canal Therapy": "$513.87 - $1,236.43",
                        "Retreatment of Root Canal Therapy, Apicoectomy and Retrofilling": "$89.73 - $1,549.36"
                    }
                ]
            },
            {
                "name": "Periodontics",
                "serviceA": [
                    {
                        "Management of Oral Disease": "$50.00 - $60.00",
                        "Miscellaneous": "$95.26 - $114.31",
                        "Root Planing": "$30.00 - $283.20"
                    }
                ],
                "serviceB": [
                    {
                        "Desensitization": "$60.00",
                        "Periodontal Splint of Ligation, Provisional, Extra Coronal": "$47.66 - $227.00",
                        "Periodontal Re-Evaluation/Evaluation": "$95.26 - $114.31"
                    }
                ]
            },
            {
                "name": "Prosthodontics - Removable",
                "serviceA": [
                    {
                        "Complete Dentures - Standard": "$864.88 - $1698.28",
                        "Partial Acrylic Dentures": "N/A",
                        "Partial Cast Dentures": "$362.56 - $2,857.74",
                        "Denture Adjustments": "$72.53 - $87.04",
                        "Repairs and Additions": "$72.53 - $348.05",
                        "Reline or Rebase": "$87.04 - $565.58",
                        "Tissue Conditioning": "$145.04 - $267.17"
                    }
                ],
                "serviceB": [
                    {
                        "Complete/Immediate Dentures": "$1,022.09 - $2,938.51"
                    }
                ]
            },
            {
                "name": "Oral And Maxillofacial Surgery",
                "serviceA": [
                    {
                        "Oral And Maxillofacial Surgery": "$47.54 - $569.81"
                    }
                ],
                "serviceB": [
                    {
                        "Oral And Maxillofacial Surgery": "$105.71 - $928.45"
                    }
                ]
            },
            {
                "name": "Orthodontics (Not Available Until 2025)",
                "serviceA": [
                    {
                        "Examination": "$126.77",
                        "Diagnostic records": "$507.09"
                    }
                ],
                "serviceB": [
                    {
                        "Orthodontics": "$68.33 - $2,654.49"
                    }
                ]
            },
            {
                "name": "Adjunctive General Services",
                "serviceA": [
                    {
                        "Nitrous Oxide and Oral Sedation": "$66.19 - $377.23"
                    }
                ],
                "serviceB": [
                    {
                        "Adjunctive General Services": "$46.98 - $743.48"
                    }
                ]
            }
        ]
    },
    {
        "name": "British Columbia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_British_Columbia.svg",
        "services": [
            {
                "name": "Diagnostic",
                "serviceA": [
                    {
                        "First Dental Visit": "$42.64",
                        "Recall Examination": "$29.97",
                        "Emergency Examination": "$54.95"
                    }
                ],
                "serviceB": [
                    {
                        "First Dental Visit": "$42.64"
                    }
                ]
            }
        ]
    }
    
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const provinceSelect = document.getElementById("provinceSelect");
    const serviceSelect = document.getElementById("serviceSelect");
    const serviceDetails = document.getElementById("serviceDetails");
  
    const populateProvince = () => {
      data.forEach((province) => {
        const option = document.createElement("option");
        option.value = province.name;
        option.setAttribute("imgData", province.flag);
        option.textContent = province.name;
        provinceSelect.appendChild(option);
      });
    };
  
    const selectService = (selectedProvince) => {
      serviceSelect.innerHTML = '<option value="">Select Service</option>'; // Clear previous options
      serviceDetails.innerHTML = ""; // Reset content everytime we switch provinces
      const province = data.find((prov) => prov.name === selectedProvince);
  
      if (province) {
        province.services.forEach((service) => {
          const option = document.createElement("option");
          option.value = service.name;
          option.textContent = service.name;
          serviceSelect.appendChild(option);
        });
      }
    };
  
    provinceSelect.addEventListener("change", (e) => {
      const selectedProvince = e.target.value;
      selectService(selectedProvince);
      updateURL(selectedProvince);
    });
  
    serviceSelect.addEventListener("change", function () {
      const selectedProvName = provinceSelect.value;
      const selectedServiceName = this.value;
      const selectedProvince = data.find(
        (province) => province.name === selectedProvName
      );
      const selectedProvflag = provinceSelect.options[provinceSelect.selectedIndex].getAttribute(
        "imgData"
      );
      const textWrapperA = document.createElement("div");
      textWrapperA.className = "textWrapper-a";
      textWrapperA.innerHTML = `<h3>Schedule A</h3>`;
      const textWrapperB = document.createElement("div");
      textWrapperB.className = "textWrapper-b";
      textWrapperB.innerHTML = `<hr><h3>Schedule B</h3><p class="disclaimer">* All Procedures in Schedule B have a Preauthorization Requirement and will be available six (6) months after Plan launch, except orthodontics, which will be available beginning in 2025.</p>`;
  
      if (selectedProvince) {
        const selectedService = selectedProvince.services.find(
          (services) => services.name === selectedServiceName
        );
  
        if (selectedService) {
          const serviceDetailsContentA = selectedService.serviceA[0]; // Assuming each service has a single details object
          const serviceDetailsContentB = selectedService.serviceB[0];
          serviceDetails.innerHTML = `<img src="${selectedProvflag}"/><h1>${selectedProvName} Service Details</h1><h2>${selectedServiceName}</h2>`;
  
          for (const [service_title_a, price_a] of Object.entries(
            serviceDetailsContentA
          )) {
            const detailA = document.createElement("p");
            detailA.innerHTML = `<span>${service_title_a}:</span> ${price_a}`;
            textWrapperA.append(detailA);
            serviceDetails.appendChild(textWrapperA);
          }
  
          for (const [service_title, price] of Object.entries(
            serviceDetailsContentB
          )) {
            const detailB = document.createElement("p");
            detailB.innerHTML = `<span>${service_title}:</span> ${price}`;
            textWrapperB.append(detailB);
            serviceDetails.appendChild(textWrapperB);
          }
        }
      }
    });
    

    // Update url to have selected province
    const updateURL = (selectedProvince) => {
      const url = new URL(window.location);
      url.searchParams.set("province", selectedProvince);
      window.history.pushState({}, "", url);
    };

    // Set selected province based on url 
  
    const setProvinceFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const province = urlParams.get("province");
      if (province) {
        provinceSelect.value = province;
        selectService(province);
      }
    };
  
    populateProvince();
    setProvinceFromURL();
  });
  
  