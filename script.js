function generateIdea() {
  const ideas = [
    // ECE
    { dept: "ECE", domain: "Embedded Systems", level: "Easy", title: "Smart Street Light", desc: "Automatic street light using LDR", tech: "Arduino, LDR, LED" },
    { dept: "ECE", domain: "Embedded Systems", level: "Medium", title: "Digital Notice Board", desc: "Wireless notice display system", tech: "Arduino, Bluetooth" },
    { dept: "ECE", domain: "Embedded Systems", level: "Hard", title: "Home Automation System", desc: "Control home appliances via mobile", tech: "IoT, Arduino" },

    { dept: "ECE", domain: "IoT", level: "Easy", title: "Temperature Monitor", desc: "Monitor room temperature", tech: "Sensor, Arduino" },
    { dept: "ECE", domain: "IoT", level: "Medium", title: "Smart Irrigation", desc: "Automatic irrigation using sensors", tech: "IoT, Sensors" },
    { dept: "ECE", domain: "IoT", level: "Hard", title: "Industrial Monitoring", desc: "Monitor machines remotely", tech: "IoT, Cloud" },

    // CSE
    { dept: "CSE", domain: "Web Development", level: "Easy", title: "Portfolio Website", desc: "Personal website", tech: "HTML, CSS" },
    { dept: "CSE", domain: "Web Development", level: "Medium", title: "Online Quiz System", desc: "Quiz platform", tech: "HTML, JS" },
    { dept: "CSE", domain: "Web Development", level: "Hard", title: "Job Portal", desc: "Job search website", tech: "Web, Database" }
  ];

  const dept = document.getElementById("department").value;
  const domain = document.getElementById("domain").value;

  const filteredIdeas = ideas.filter(
    idea => idea.dept === dept && idea.domain === domain
  );

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (filteredIdeas.length === 0) {
    resultDiv.innerHTML = "❌ No projects found";
    return;
  }

  ["Easy", "Medium", "Hard"].forEach(level => {
    const levelIdeas = filteredIdeas.filter(i => i.level === level);

    if (levelIdeas.length > 0) {
      resultDiv.innerHTML += `<h2>${level} Level</h2>`;

      levelIdeas.forEach((idea, index) => {
        resultDiv.innerHTML += `
          <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
            <h3>${index + 1}. ${idea.title}</h3>
            <p>${idea.desc}</p>
            <p><b>Tech:</b> ${idea.tech}</p>
          </div>
        `;
      });
    }
  });
}

