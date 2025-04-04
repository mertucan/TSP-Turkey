// Şehir verilerini yükleme
const cities = [
    "ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", 
    "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA", 
    "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", 
    "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", 
    "HATAY", "ISPARTA", "MERSİN", "İSTANBUL", "İZMİR", "KARS", "KASTAMONU", "KAYSERİ", 
    "KIRKLARELİ", "KIRŞEHİR", "KOCAELİ (İZMİT)", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", 
    "KAHRAMANMARAŞ", "MARDİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "RİZE", 
    "SAKARYA (ADAPAZARI)", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "TEKİRDAĞ", "TOKAT", "TRABZON", 
    "TUNCELİ", "ŞANLIURFA", "UŞAK", "VAN", "YOZGAT", "ZONGULDAK", "AKSARAY", "BAYBURT", 
    "KARAMAN", "KIRIKKALE", "BATMAN", "ŞIRNAK", "BARTIN", "ARDAHAN", "IĞDIR", "YALOVA", 
    "KARABÜK", "KİLİS", "OSMANİYE", "DÜZCE"
    ];

    const cityCoordinates = {
        "ADANA": {x: 492, y: 444},
        "ADIYAMAN": {x: 645, y: 384},
        "AFYONKARAHİSAR": {x: 265, y: 310},
        "AĞRI": {x: 870, y: 200},
        "AMASYA": {x: 520, y: 160},
        "ANKARA": {x: 375, y: 215},
        "ANTALYA": {x: 270, y: 440},
        "ARTVİN": {x: 810, y: 100},
        "AYDIN": {x: 125, y: 367},
        "BALIKESİR": {x: 130, y: 232},
        "BİLECİK": {x: 240, y: 195},
        "BİNGÖL": {x: 760, y: 285},
        "BİTLİS": {x: 830, y: 310},
        "BOLU": {x: 320, y: 150},
        "BURDUR": {x: 245, y: 385},
        "BURSA": {x: 195, y: 190},
        "ÇANAKKALE": {x: 70, y: 180},
        "ÇANKIRI": {x: 422, y: 163},
        "ÇORUM": {x: 485, y: 165},
        "DENİZLİ": {x: 185, y: 370},
        "DİYARBAKIR": {x: 740, y: 355},
        "EDİRNE": {x: 77, y: 55},
        "ELAZIĞ": {x: 690, y: 295},
        "ERZİNCAN": {x: 700, y: 220},
        "ERZURUM": {x: 780, y: 200},
        "ESKİŞEHİR": {x: 260, y: 220},
        "GAZİANTEP": {x: 600, y: 430},
        "GİRESUN": {x: 645, y: 135},
        "GÜMÜŞHANE": {x: 695, y: 170},
        "HAKKARİ": {x: 920, y: 370},
        "HATAY": {x: 540, y: 500},
        "ISPARTA": {x: 260, y: 380},
        "MERSİN": {x: 470, y: 455},
        "İSTANBUL": {x: 200, y: 115},
        "İZMİR": {x: 88, y: 325},
        "KARS": {x: 864, y: 145},
        "KASTAMONU": {x: 420, y: 100},
        "KAYSERİ": {x: 510, y: 310},
        "KIRKLARELİ": {x: 110, y: 55},
        "KIRŞEHİR": {x: 440, y: 270},
        "KOCAELİ (İZMİT)": {x: 235, y: 140},
        "KONYA": {x: 360, y: 375},
        "KÜTAHYA": {x: 240, y: 250},
        "MALATYA": {x: 640, y: 330},
        "MANİSA": {x: 110, y: 300},
        "KAHRAMANMARAŞ": {x: 570, y: 390},
        "MARDİN": {x: 770, y: 400},
        "MUĞLA": {x: 150, y: 410},
        "MUŞ": {x: 800, y: 285},
        "NEVŞEHİR": {x: 470, y: 320},
        "NİĞDE": {x: 470, y: 368},
        "ORDU": {x: 620, y: 135},
        "RİZE": {x: 750, y: 120},
        "SAKARYA (ADAPAZARI)": {x: 260, y: 140},
        "SAMSUN": {x: 535, y: 110},
        "SİİRT": {x: 830, y: 345},
        "SİNOP": {x: 480, y: 60},
        "SİVAS": {x: 580, y: 230},
        "TEKİRDAĞ": {x: 120, y: 115},
        "TOKAT": {x: 550, y: 185},
        "TRABZON": {x: 705, y: 125},
        "TUNCELİ": {x: 705, y: 265},
        "ŞANLIURFA": {x: 680, y: 420},
        "UŞAK": {x: 210, y: 310},
        "VAN": {x: 900, y: 300},
        "YOZGAT": {x: 470, y: 220},
        "ZONGULDAK": {x: 325, y: 90},
        "AKSARAY": {x: 430, y: 340},
        "BAYBURT": {x: 730, y: 170},
        "KARAMAN": {x: 390, y: 425},
        "KIRIKKALE": {x: 410, y: 225},
        "BATMAN": {x: 790, y: 360},
        "ŞIRNAK": {x: 850, y: 380},
        "BARTIN": {x: 360, y: 80},
        "ARDAHAN": {x: 850, y: 100},
        "IĞDIR": {x: 920, y: 180},
        "YALOVA": {x: 200, y: 150},
        "KARABÜK": {x: 365, y: 115},
        "KİLİS": {x: 590, y: 465},
        "OSMANİYE": {x: 550, y: 430},
        "DÜZCE": {x: 295, y: 135}
    };
    
    
    // Mesafeler için örnek veri yapısı
    // Gerçek uygulamada, mesafe verileri bir dosyadan veya API'den alınır
    const distances = {};
    
    // Tüm şehirler için mesafe matrisini oluştur (örnek için rassal değerler)
    cities.forEach(city1 => {
        distances[city1] = {};
        cities.forEach(city2 => {
            if (city1 !== city2) {
                // Gerçek projede bu değerler ilmesafe.txt dosyasından gelecek
                distances[city1][city2] = Math.floor(Math.random() * 1000) + 50;
            }
        });
    });

    // SVG elementi oluştur ve haritanın üzerine ekle
    function createMapOverlay() {
        // Mevcut bir SVG varsa temizle
        const existingSvg = document.getElementById('route-overlay');
        if (existingSvg) {
            existingSvg.remove();
        }
        
        const mapContainer = document.querySelector('.map-container');
        const mapImage = document.getElementById('map-image');
        
        // Harita boyutlarını al
        const mapWidth = mapImage.clientWidth;
        const mapHeight = mapImage.clientHeight;
        
        // SVG oluştur
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", "route-overlay");
        svg.setAttribute("width", mapWidth);
        svg.setAttribute("height", mapHeight);
        svg.style.position = "absolute";
        svg.style.top = mapImage.offsetTop + "px";
        svg.style.left = mapImage.offsetLeft + "px";
        svg.style.pointerEvents = "none"; // Harita etkilileşimlerini engellememek için
        
        mapContainer.style.position = "relative"; // SVG'yi doğru konumlandırmak için
        mapContainer.appendChild(svg);
        
        return svg;
    }

    // Koordinatları harita boyutuna göre ölçeklendir
    function scaleCoordinates(coordinates, mapWidth, mapHeight) {
        // Base dimensions the coordinates are designed for
        const baseWidth = 1000;
        const baseHeight = 600;
        
        const scaleX = mapWidth / baseWidth;
        const scaleY = mapHeight / baseHeight;
        
        const scaledCoords = {};
        
        for (const city in coordinates) {
            scaledCoords[city] = {
                x: coordinates[city].x * scaleX,
                y: coordinates[city].y * scaleY
            };
        }
        
        return scaledCoords;
    }

    // İki nokta arasında çizgi çiz
    function drawLine(svg, x1, y1, x2, y2, color, thickness, opacity, svgNS) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", thickness);
        line.setAttribute("stroke-opacity", opacity);
        svg.appendChild(line);
        return line;
    }

    // Bir nokta çiz (şehir)
    function drawPoint(svg, x, y, radius, color, cityName, svgNS) {
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", radius);
        circle.setAttribute("fill", color);
        svg.appendChild(circle);
        
        // Şehir ismi etiketi
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y - radius - 5);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#2c3e50");
        text.setAttribute("font-size", "10px");
        text.setAttribute("font-weight", "bold");
        text.textContent = cityName;
        svg.appendChild(text);
        
        return {circle, text};
    }


    // Sıra numarası etiketi çiz
    function drawOrderLabel(svg, x, y, order, svgNS) {
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 8);
        circle.setAttribute("fill", "#e74c3c");
        svg.appendChild(circle);
        
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y + 3);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "white");
        text.setAttribute("font-size", "10px");
        text.setAttribute("font-weight", "bold");
        text.textContent = order;
        svg.appendChild(text);
        
        return {circle, text};
    }

    // Rota animasyonu
    function animateRoute(route, coordinates, detailedDistances) {
        const svg = createMapOverlay();
        const svgNS = "http://www.w3.org/2000/svg";
        
        // Get map dimensions
        const mapImage = document.getElementById('map-image');
        const mapWidth = mapImage.clientWidth;
        const mapHeight = mapImage.clientHeight;
        
        // Scale coordinates
        const scaledCoords = scaleCoordinates(coordinates, mapWidth, mapHeight);
        
        // Define gradients
        const defs = document.createElementNS(svgNS, "defs");
        svg.appendChild(defs);
        
        // Line gradient
        const lineGradient = document.createElementNS(svgNS, "linearGradient");
        lineGradient.setAttribute("id", "routeGradient");
        lineGradient.setAttribute("gradientUnits", "userSpaceOnUse");
        
        const stop1 = document.createElementNS(svgNS, "stop");
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", "#3498db");
        
        const stop2 = document.createElementNS(svgNS, "stop");
        stop2.setAttribute("offset", "100%");
        stop2.setAttribute("stop-color", "#e74c3c");
        
        lineGradient.appendChild(stop1);
        lineGradient.appendChild(stop2);
        defs.appendChild(lineGradient);
        
        // Enhanced glow effect for better visibility
        const glowEffect = document.createElementNS(svgNS, "filter");
        glowEffect.setAttribute("id", "glow");
        
        const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", "3.5");  // Increased blur for better glow
        feGaussianBlur.setAttribute("result", "coloredBlur");
        
        const feMerge = document.createElementNS(svgNS, "feMerge");
        const feMergeNode1 = document.createElementNS(svgNS, "feMergeNode");
        feMergeNode1.setAttribute("in", "coloredBlur");
        const feMergeNode2 = document.createElementNS(svgNS, "feMergeNode");
        feMergeNode2.setAttribute("in", "SourceGraphic");
        
        feMerge.appendChild(feMergeNode1);
        feMerge.appendChild(feMergeNode2);
        glowEffect.appendChild(feGaussianBlur);
        glowEffect.appendChild(feMerge);
        defs.appendChild(glowEffect);
        
        // Additional stronger glow for highlighted elements
        const strongGlowEffect = document.createElementNS(svgNS, "filter");
        strongGlowEffect.setAttribute("id", "strongGlow");
        
        const feStrongGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
        feStrongGaussianBlur.setAttribute("stdDeviation", "5");
        feStrongGaussianBlur.setAttribute("result", "coloredBlur");
        
        const feStrongMerge = document.createElementNS(svgNS, "feMerge");
        const feStrongMergeNode1 = document.createElementNS(svgNS, "feMergeNode");
        feStrongMergeNode1.setAttribute("in", "coloredBlur");
        const feStrongMergeNode2 = document.createElementNS(svgNS, "feMergeNode");
        feStrongMergeNode2.setAttribute("in", "SourceGraphic");
        
        feStrongMerge.appendChild(feStrongMergeNode1);
        feStrongMerge.appendChild(feStrongMergeNode2);
        strongGlowEffect.appendChild(feStrongGaussianBlur);
        strongGlowEffect.appendChild(feStrongMerge);
        defs.appendChild(strongGlowEffect);
        
        // Create a group for background elements
        const backgroundGroup = document.createElementNS(svgNS, "g");
        backgroundGroup.setAttribute("id", "background-elements");
        svg.appendChild(backgroundGroup);
        
        // Create a group for path elements (middle layer)
        const pathGroup = document.createElementNS(svgNS, "g");
        pathGroup.setAttribute("id", "path-elements");
        svg.appendChild(pathGroup);
        
        // Create a group for foreground elements
        const foregroundGroup = document.createElementNS(svgNS, "g");
        foregroundGroup.setAttribute("id", "foreground-elements");
        svg.appendChild(foregroundGroup);
        
        // Draw city points (with improved visibility)
        for (const city of route) {
            if (scaledCoords[city]) {
                const circle = document.createElementNS(svgNS, "circle");
                circle.setAttribute("cx", scaledCoords[city].x);
                circle.setAttribute("cy", scaledCoords[city].y);
                circle.setAttribute("r", 3);
                circle.setAttribute("fill", "#3498db");
                circle.setAttribute("opacity", "0.6");
                circle.setAttribute("stroke", "#ffffff");
                circle.setAttribute("stroke-width", "1");
                backgroundGroup.appendChild(circle);
            }
        }
        
        // Route animation
        let step = 0;
        let animationDelay = 500; // delay between steps in milliseconds
        
        function animateStep() {
            if (step < route.length - 1) {
                const fromCity = route[step];
                const toCity = route[step + 1];
                
                const fromCoord = scaledCoords[fromCity];
                const toCoord = scaledCoords[toCity];
                
                if (fromCoord && toCoord) {
                    // Create curved path
                    const path = document.createElementNS(svgNS, "path");
                    
                    // Calculate offset for curve
                    const dx = toCoord.x - fromCoord.x;
                    const dy = toCoord.y - fromCoord.y;
                    const calculatedDistance = Math.sqrt(dx * dx + dy * dy);
                    
                    // Adjust curve based on distance
                    const curveOffset = Math.min(calculatedDistance * 0.15, 30);
                    
                    // Calculate control points (for slightly curved route)
                    const midX = (fromCoord.x + toCoord.x) / 2;
                    const midY = (fromCoord.y + toCoord.y) / 2 - curveOffset;
                    
                    // Set path properties with improved visibility
                    path.setAttribute("d", `M ${fromCoord.x} ${fromCoord.y} Q ${midX} ${midY} ${toCoord.x} ${toCoord.y}`);
                    path.setAttribute("stroke", "url(#routeGradient)");
                    path.setAttribute("stroke-width", 4); // Increased width
                    path.setAttribute("fill", "none");
                    path.setAttribute("stroke-linecap", "round");
                    path.setAttribute("stroke-opacity", 0.9); // Increased opacity
                    path.setAttribute("stroke-dasharray", calculatedDistance);
                    path.setAttribute("stroke-dashoffset", calculatedDistance);
                    pathGroup.appendChild(path);
                    
                    // Path animation
                    path.style.transition = `stroke-dashoffset 0.8s ease-in-out`;
                    setTimeout(() => {
                        path.style.strokeDashoffset = "0";
                    }, 100);
                    
                    // Highlight start city and add numbered label
                    if (step === 0) {
                        const startPoint = document.createElementNS(svgNS, "circle");
                        startPoint.setAttribute("cx", fromCoord.x);
                        startPoint.setAttribute("cy", fromCoord.y);
                        startPoint.setAttribute("r", 10); // Increased size
                        startPoint.setAttribute("fill", "#3498db");
                        startPoint.setAttribute("filter", "url(#strongGlow)"); // Stronger glow
                        startPoint.setAttribute("stroke", "#ffffff");
                        startPoint.setAttribute("stroke-width", "2");
                        startPoint.style.opacity = 0;
                        foregroundGroup.appendChild(startPoint);
                        
                        // Start point animation
                        setTimeout(() => {
                            startPoint.style.transition = "opacity 0.5s ease, r 0.3s ease";
                            startPoint.style.opacity = 1;
                        }, 100);
                        
                        // Add hover effect for better interactivity
                        startPoint.addEventListener("mouseover", function() {
                            this.setAttribute("r", "12");
                            this.setAttribute("stroke-width", "3");
                        });
                        
                        startPoint.addEventListener("mouseout", function() {
                            this.setAttribute("r", "10");
                            this.setAttribute("stroke-width", "2");
                        });
                        
                        // Number label with better visibility
                        const labelBg = document.createElementNS(svgNS, "circle");
                        labelBg.setAttribute("cx", fromCoord.x);
                        labelBg.setAttribute("cy", fromCoord.y);
                        labelBg.setAttribute("r", 7);
                        labelBg.setAttribute("fill", "#3498db");
                        labelBg.setAttribute("stroke", "#ffffff");
                        labelBg.setAttribute("stroke-width", "1");
                        labelBg.style.opacity = 0;
                        foregroundGroup.appendChild(labelBg);
                        
                        const orderLabel = document.createElementNS(svgNS, "text");
                        orderLabel.setAttribute("x", fromCoord.x);
                        orderLabel.setAttribute("y", fromCoord.y + 3);
                        orderLabel.setAttribute("fill", "white");
                        orderLabel.setAttribute("text-anchor", "middle");
                        orderLabel.setAttribute("font-size", "10px");
                        orderLabel.setAttribute("font-weight", "bold");
                        orderLabel.textContent = "1";
                        orderLabel.style.opacity = 0;
                        foregroundGroup.appendChild(orderLabel);
                        
                        setTimeout(() => {
                            labelBg.style.transition = "opacity 0.5s ease";
                            labelBg.style.opacity = 1;
                            
                            orderLabel.style.transition = "opacity 0.5s ease";
                            orderLabel.style.opacity = 1;
                        }, 300);
                    }
                    
                    // Highlight destination city and add numbered label
                    const endPoint = document.createElementNS(svgNS, "circle");
                    endPoint.setAttribute("cx", toCoord.x);
                    endPoint.setAttribute("cy", toCoord.y);
                    endPoint.setAttribute("r", 10); // Increased size
                    endPoint.setAttribute("fill", "#e74c3c");
                    endPoint.setAttribute("filter", "url(#strongGlow)"); // Stronger glow
                    endPoint.setAttribute("stroke", "#ffffff");
                    endPoint.setAttribute("stroke-width", "2");
                    endPoint.style.opacity = 0;
                    foregroundGroup.appendChild(endPoint);
                    
                    // Add hover effect for destination point
                    endPoint.addEventListener("mouseover", function() {
                        this.setAttribute("r", "12");
                        this.setAttribute("stroke-width", "3");
                    });
                    
                    endPoint.addEventListener("mouseout", function() {
                        this.setAttribute("r", "10");
                        this.setAttribute("stroke-width", "2");
                    });
                    
                    setTimeout(() => {
                        endPoint.style.transition = "opacity 0.5s ease, r 0.3s ease";
                        endPoint.style.opacity = 1;
                    }, 800);
                    
                    // Number label with better visibility
                    const labelEndBg = document.createElementNS(svgNS, "circle");
                    labelEndBg.setAttribute("cx", toCoord.x);
                    labelEndBg.setAttribute("cy", toCoord.y);
                    labelEndBg.setAttribute("r", 7);
                    labelEndBg.setAttribute("fill", "#e74c3c");
                    labelEndBg.setAttribute("stroke", "#ffffff");
                    labelEndBg.setAttribute("stroke-width", "1");
                    labelEndBg.style.opacity = 0;
                    foregroundGroup.appendChild(labelEndBg);
                    
                    const orderLabel = document.createElementNS(svgNS, "text");
                    orderLabel.setAttribute("x", toCoord.x);
                    orderLabel.setAttribute("y", toCoord.y + 3);
                    orderLabel.setAttribute("fill", "white");
                    orderLabel.setAttribute("text-anchor", "middle");
                    orderLabel.setAttribute("font-size", "10px");
                    orderLabel.setAttribute("font-weight", "bold");
                    orderLabel.textContent = (step + 2).toString();
                    orderLabel.style.opacity = 0;
                    foregroundGroup.appendChild(orderLabel);
                    
                    setTimeout(() => {
                        labelEndBg.style.transition = "opacity 0.5s ease";
                        labelEndBg.style.opacity = 1;
                        
                        orderLabel.style.transition = "opacity 0.5s ease";
                        orderLabel.style.opacity = 1;
                    }, 1000);
                    
                    // Show distance information (improved label)
                    const midPoint = {
                        x: fromCoord.x + dx * 0.5,
                        y: fromCoord.y + dy * 0.5
                    };
                    
                    // Find relevant distance
                    let distance = "?";
                    for (const segment of detailedDistances) {
                        if (segment.from === fromCity && segment.to === toCity) {
                            distance = segment.distance;
                            break;
                        }
                    }
                    
                    // Create distance label with improved visibility
                    const distanceBg = document.createElementNS(svgNS, "rect");
                    distanceBg.setAttribute("x", midPoint.x - 25);
                    distanceBg.setAttribute("y", midPoint.y - 25);
                    distanceBg.setAttribute("width", 50);
                    distanceBg.setAttribute("height", 22);
                    distanceBg.setAttribute("rx", 11);
                    distanceBg.setAttribute("ry", 11);
                    distanceBg.setAttribute("fill", "white");
                    distanceBg.setAttribute("stroke", "#e74c3c");
                    distanceBg.setAttribute("stroke-width", "2");
                    distanceBg.setAttribute("filter", "url(#glow)");
                    distanceBg.style.opacity = 0;
                    foregroundGroup.appendChild(distanceBg);
                    
                    const distanceText = document.createElementNS(svgNS, "text");
                    distanceText.setAttribute("x", midPoint.x);
                    distanceText.setAttribute("y", midPoint.y - 10);
                    distanceText.setAttribute("text-anchor", "middle");
                    distanceText.setAttribute("fill", "#2c3e50");
                    distanceText.setAttribute("font-size", "12px"); // Increased font size
                    distanceText.setAttribute("font-weight", "bold");
                    distanceText.textContent = `${distance} km`;
                    distanceText.style.opacity = 0;
                    foregroundGroup.appendChild(distanceText);
                    
                    setTimeout(() => {
                        distanceBg.style.transition = "opacity 0.5s ease";
                        distanceBg.style.opacity = 0.95;
                        
                        distanceText.style.transition = "opacity 0.5s ease";
                        distanceText.style.opacity = 1;
                    }, 1200);
                    
                    // Add hover effect to distance label for better interactivity
                    distanceBg.addEventListener("mouseover", function() {
                        this.setAttribute("stroke-width", "3");
                        this.setAttribute("filter", "url(#strongGlow)");
                    });
                    
                    distanceBg.addEventListener("mouseout", function() {
                        this.setAttribute("stroke-width", "2");
                        this.setAttribute("filter", "url(#glow)");
                    });
                }
                
                step++;
                setTimeout(animateStep, animationDelay);
            }
        }
        
        // Start animation
        animateStep();
    }
    
    // Select elemanını doldur
    function populateSelect(select, cities) {
        select.innerHTML = '';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            select.appendChild(option);
        });
    }
    
    // Sayaç
    let cityCounter = 2;
    
    // İlk yükleme
    document.addEventListener('DOMContentLoaded', () => {
        // Şehir listelerini doldur
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            populateSelect(select);
        });
        
        // Varsayılan şehirleri seç
        document.getElementById('city1').value = "İSTANBUL";
        document.getElementById('city2').value = "ANKARA";
        
        // Yeni şehir ekleme butonunu ayarla
        document.getElementById('add-city').addEventListener('click', () => {
            cityCounter++;
            const newCityDiv = document.createElement('div');
            newCityDiv.className = 'city-selection';
            newCityDiv.innerHTML = `
                <label for="city${cityCounter}"><i class="fas fa-route"></i> Şehir${cityCounter-1} Adı:</label>
                <select id="city${cityCounter}"></select>
            `;
            document.getElementById('cities-container').appendChild(newCityDiv);
            
            // Sadece yeni eklenen select elementini doldur
            const newSelect = document.getElementById(`city${cityCounter}`);
            populateSelect(newSelect);
            
            // Yeni eklenen şehrin varsayılan değerini ADANA olarak ayarla
            newSelect.value = "ADANA";
            
            // "Son Şehri Sil" butonunu etkinleştir
            document.getElementById('delete-city').disabled = false;
        });
        
        // Son şehri silme butonunu ayarla
        document.getElementById('delete-city').addEventListener('click', () => {
            // En az 1 ekstra şehir olmalı (başlangıç dışında)
            if (cityCounter > 2) {
                const citiesContainer = document.getElementById('cities-container');
                citiesContainer.removeChild(citiesContainer.lastChild);
                cityCounter--;
                
                // Eğer sadece 1 şehir kaldıysa "Son Şehri Sil" butonunu devre dışı bırak
                if (cityCounter === 2) {
                    document.getElementById('delete-city').disabled = true;
                }
            }
        });
        
        // Hesaplama butonunu ayarla
        document.getElementById('calculate').addEventListener('click', () => {
            const loading = document.getElementById('loading');
            loading.style.display = 'block';
            
            // Asenkron hesaplama için setTimeout kullanılır
            setTimeout(() => {
                calculateRoute();
                loading.style.display = 'none';
            }, 500);
        });
    });

    // Şehir ve mesafe verilerini yükleyen fonksiyon
    async function loadCityData() {
        try {
            // JSON dosyasını fetch ile yükle
            const response = await fetch('/data/sehirler.json');
            if (!response.ok) {
                throw new Error('Şehir verileri yüklenemedi');
            }
            
            // JSON verisini parse et
            const distances = await response.json();
            
            console.log('Şehir mesafe verileri başarıyla yüklendi');
            return distances;
        } catch (error) {
            console.error('Veri yükleme hatası:', error);
            alert('Şehir verileri yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
            // Hata durumunda boş bir nesne döndür
            return {};
        }
    }


    // Mesafe verilerini ayrıştıran fonksiyon
    function parseDistanceData(data) {
        // Veri satırlarını ayır
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        lines.forEach(line => {
            // Her satırı ayrıştır
            // Örnek: ADANA{ ADANA, 0 ADIYAMAN, 337 ... }
            const cityMatch = line.match(/^([A-ZĞÜŞİÖÇ ]+){/);
            
            if (cityMatch) {
                const fromCity = cityMatch[1].trim();
                distances[fromCity] = {};
                
                // Mesafeleri ayıkla
                const distancesText = line.substring(line.indexOf('{')+1, line.lastIndexOf('}'));
                const distancePairs = distancesText.split(/\s+(?=[A-ZĞÜŞİÖÇ])/);
                
                distancePairs.forEach(pair => {
                    // Her mesafe çiftini ayrıştır (örn. "ADANA, 0")
                    const match = pair.match(/([A-ZĞÜŞİÖÇ ()-]+),\s*(\d+)/);
                    if (match) {
                        const toCity = match[1].trim();
                        const distance = parseInt(match[2], 10);
                        distances[fromCity][toCity] = distance;
                    }
                });
            }
        });
        
        // Eksik şehirleri kontrol et ve güncelle
        cities.forEach(city1 => {
            if (!distances[city1]) {
                distances[city1] = {};
            }
            
            cities.forEach(city2 => {
                // Bazı şehir adları eşleşmeyebilir, kontrol et
                if (city1 !== city2 && !distances[city1][city2]) {
                    // Eğer mesafe verisini bulamazsak, ters yönünü kontrol et
                    if (distances[city2] && distances[city2][city1]) {
                        distances[city1][city2] = distances[city2][city1];
                    } else {
                        // Yine bulamazsak varsayılan değer atayalım
                        console.warn(`${city1} ile ${city2} arasındaki mesafe verisine erişilemiyor`);
                        distances[city1][city2] = 500; // Varsayılan mesafe
                    }
                }
            });
        });
    }

    // UI'ı başlatan fonksiyon
    function initializeUI(distances) {
        // Şehir listelerini doldur
        const cities = Object.keys(distances);
        
        // Selectleri doldur
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            populateSelect(select, cities);
        });
        
        // Varsayılan şehirleri seç
        document.getElementById('city1').value = "İSTANBUL";
        document.getElementById('city2').value = "ANKARA";
        
        // Yeni şehir ekleme butonunu ayarla
        document.getElementById('add-city').addEventListener('click', () => {
            cityCounter++;
            const newCityDiv = document.createElement('div');
            newCityDiv.className = 'city-selection';
            newCityDiv.innerHTML = `
                <label for="city${cityCounter}"><i class="fas fa-route"></i> Şehir${cityCounter-1} Adı:</label>
                <select id="city${cityCounter}"></select>
            `;
            document.getElementById('cities-container').appendChild(newCityDiv);
            
            // Sadece yeni eklenen select elementini doldur
            const newSelect = document.getElementById(`city${cityCounter}`);
            populateSelect(newSelect, cities);
            
            // Yeni eklenen şehrin varsayılan değerini ADANA olarak ayarla
            newSelect.value = "ADANA";
            
            // "Son Şehri Sil" butonunu etkinleştir
            document.getElementById('delete-city').disabled = false;
        });
        
        // Son şehri silme butonunu ayarla
        document.getElementById('delete-city').addEventListener('click', () => {
            // En az 1 ekstra şehir olmalı (başlangıç dışında)
            if (cityCounter > 2) {
                const citiesContainer = document.getElementById('cities-container');
                citiesContainer.removeChild(citiesContainer.lastChild);
                cityCounter--;
                
                // Eğer sadece 1 şehir kaldıysa "Son Şehri Sil" butonunu devre dışı bırak
                if (cityCounter === 2) {
                    document.getElementById('delete-city').disabled = true;
                }
            }
        });
        
        // Hesaplama butonunu ayarla
        document.getElementById('calculate').addEventListener('click', () => {
            const loading = document.getElementById('loading');
            loading.style.display = 'block';
            
            // Asenkron hesaplama için setTimeout kullanılır
            setTimeout(() => {
                calculateRoute(distances);
                loading.style.display = 'none';
            }, 500);
        });
    }

    // sonuc.txt dosyasını yükleyen ve ayrıştıran fonksiyon
    async function loadDistanceData() {
        try {
            const response = await fetch('sonuc.txt');
            if (!response.ok) {
                throw new Error('Mesafe verileri yüklenemedi');
            }
            
            const data = await response.text();
            parseDistanceData(data);
            
            console.log('Mesafe verileri başarıyla yüklendi');
            
            // UI'ı başlat
            initializeUI();
        } catch (error) {
            console.error('Veri yükleme hatası:', error);
            alert('Mesafe verileri yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
        }
    }

    // Gezgin Satıcı Problemi çözümü
    function calculateRoute(distances) {
        const resultDiv = document.getElementById('result');
        const selectedCities = Array.from(document.querySelectorAll('select')).map(select => select.value);
        
        // Benzersiz şehirleri kontrol et
        const uniqueCities = new Set(selectedCities);
        if (uniqueCities.size !== selectedCities.length) {
            resultDiv.innerHTML = `
                <div style="color: var(--accent-color); padding: 20px; text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p>Lütfen farklı şehirler seçin! Aynı şehri birden fazla kez seçtiniz.</p>
                </div>
            `;
            resultDiv.classList.add('visible');
            return;
        }
        
        // Başlangıç şehrini al
        const startCity = selectedCities[0];
        const citiesToVisit = selectedCities.slice(1);
        
        // Şehir sayısı fazlaysa uyarı ver (permütasyon hesaplamaları büyük sayılar için yavaş olabilir)
        if (citiesToVisit.length > 10) {
            const confirmContinue = confirm('Çok sayıda şehir seçtiniz. Hesaplama uzun sürebilir. Devam etmek istiyor musunuz?');
            if (!confirmContinue) {
                document.getElementById('loading').style.display = 'none';
                return;
            }
        }
        
        // Basit bir yaklaşım: Tüm olası permütasyonları bul ve en kısa yolu hesapla
        let bestRoute = null;
        let shortestDistance = Infinity;
        let detailedDistances = [];
        
        try {
            if (citiesToVisit.length <= 8) {
                // 8 veya daha az şehir için tüm permütasyonları dene (brute force)
                const routes = permute(citiesToVisit);
                
                routes.forEach(route => {
                    // Rotaya başlangıç şehrini ekle
                    const fullRoute = [startCity, ...route, startCity];
                    
                    // Toplam mesafeyi hesapla
                    let totalDistance = 0;
                    const routeDetails = [];
                    
                    let isValidRoute = true;
                    
                    for (let i = 0; i < fullRoute.length - 1; i++) {
                        const from = fullRoute[i];
                        const to = fullRoute[i + 1];
                        
                        // Eğer bu şehirler arasında mesafe verisi yoksa, geçersiz rota
                        if (!distances[from] || !distances[from][to]) {
                            console.warn(`${from} ile ${to} arasında mesafe verisi bulunamadı`);
                            isValidRoute = false;
                            break;
                        }
                        
                        const segmentDistance = distances[from][to];
                        totalDistance += segmentDistance;
                        
                        routeDetails.push({
                            from,
                            to,
                            distance: segmentDistance
                        });
                    }
                    
                    if (isValidRoute && totalDistance < shortestDistance) {
                        shortestDistance = totalDistance;
                        bestRoute = fullRoute;
                        detailedDistances = routeDetails;
                    }
                });
            } else {
                // Şehir sayısı çok fazla ise sezgisel/yaklaşık bir algoritma kullan (en yakın komşu)
                bestRoute = [startCity];
                let currentCity = startCity;
                const remainingCities = [...citiesToVisit];
                
                // En yakın şehri seçerek rotayı oluştur
                while (remainingCities.length > 0) {
                    let nearestCity = null;
                    let shortestSegment = Infinity;
                    
                    for (let i = 0; i < remainingCities.length; i++) {
                        const nextCity = remainingCities[i];
                        const segmentDistance = distances[currentCity][nextCity];
                        
                        if (segmentDistance < shortestSegment) {
                            shortestSegment = segmentDistance;
                            nearestCity = nextCity;
                        }
                    }
                    
                    // En yakın şehri rotaya ekle
                    bestRoute.push(nearestCity);
                    detailedDistances.push({
                        from: currentCity,
                        to: nearestCity,
                        distance: shortestSegment
                    });
                    
                    // Toplam mesafeyi güncelle
                    shortestDistance += shortestSegment;
                    
                    // Mevcut şehri güncelle ve ziyaret edilen şehri listeden çıkar
                    currentCity = nearestCity;
                    const index = remainingCities.indexOf(nearestCity);
                    remainingCities.splice(index, 1);
                }
                
                // Başlangıç şehrine geri dön
                bestRoute.push(startCity);
                const finalSegmentDistance = distances[currentCity][startCity];
                detailedDistances.push({
                    from: currentCity,
                    to: startCity,
                    distance: finalSegmentDistance
                });
                shortestDistance += finalSegmentDistance;
            }
            
            // Sonuçları göster
            if (bestRoute) {
                document.getElementById('route-display').innerHTML = bestRoute.map((city, index) => {
                    if (index === bestRoute.length - 1) {
                        return `<span style="color: var(--accent-color);">${city}</span>`;
                    }
                    return `<span style="color: var(--secondary-color);">${city}</span>`;
                }).join(' <i class="fas fa-arrow-right"></i> ');
                
                document.getElementById('distance-display').textContent = `${shortestDistance} km`;
                
                // Detaylı mesafeleri göster
                const detailedDistancesContainer = document.getElementById('detailed-distances');
                detailedDistancesContainer.innerHTML = '<ul>';

                detailedDistances.forEach((segment, index) => {
                    detailedDistancesContainer.innerHTML += `
                        <li>
                            <span><strong>${index + 1}.</strong> ${segment.from} → ${segment.to}</span>
                            <strong>${segment.distance} km</strong>
                        </li>
                    `;
                });

                detailedDistancesContainer.innerHTML += '</ul>';

                resultDiv.classList.add('visible');
                
                // Sonuca kaydır
                resultDiv.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Geçerli rota bulunamadı
                resultDiv.innerHTML = `
                    <div style="color: var(--accent-color); padding: 20px; text-align: center;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 10px;"></i>
                        <p>Seçilen şehirler arasında geçerli bir rota bulunamadı. Lütfen başka şehirler seçin.</p>
                    </div>
                `;
                resultDiv.classList.add('visible');
            }
        } catch (error) {
            console.error('Rota hesaplama hatası:', error);
            resultDiv.innerHTML = `
                <div style="color: var(--accent-color); padding: 20px; text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p>Rota hesaplanırken bir hata oluştu: ${error.message}</p>
                </div>
            `;
            resultDiv.classList.add('visible');
        }
    }

    // Bir dizinin tüm olası permütasyonlarını hesapla
    function permute(arr) {
        if (arr.length <= 1) return [arr];
        
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const remainingPerms = permute(remaining);
            
            for (let perm of remainingPerms) {
                result.push([current, ...perm]);
            }
        }
        return result;
    }

    // Ana uygulama başlangıcı
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            // Şehir ve mesafe verilerini yükle
            const distances = await loadCityData();
            
            // UI'ı başlat
            initializeUI(distances);
        } catch (error) {
            console.error('Uygulama başlatma hatası:', error);
            alert('Uygulama başlatılırken bir hata oluştu. Lütfen sayfayı yenileyin.');
        }
    });

    // Hesaplama butonunun olay dinleyicisini güncelle
    document.addEventListener('DOMContentLoaded', () => {
        const calculateButton = document.getElementById('calculate');
        
        // Mevcut event listener'ı koru ve üzerine yeni işlev ekle
        const originalClickListener = calculateButton.onclick;
        
        calculateButton.addEventListener('click', function() {
            setTimeout(() => {
                // Sonuç gösteriliyorsa ve rota varsa haritada göster
                const resultDiv = document.getElementById('result');
                if (resultDiv.classList.contains('visible')) {
                    // Rota ve detaylı mesafeleri al
                    const routeDisplay = document.getElementById('route-display').textContent;
                    if (routeDisplay) {
                        // Rotayı metin içeriğinden çıkar
                        const routeText = routeDisplay.replace(/\s*→\s*/g, ',');
                        const route = routeText.split(',').map(city => city.trim());
                        
                        // Detaylı mesafeleri al
                        const detailedDistancesContainer = document.getElementById('detailed-distances');
                        const distanceItems = detailedDistancesContainer.querySelectorAll('li');
                        
                        const detailedDistances = Array.from(distanceItems).map(item => {
                            const text = item.textContent.trim();
                            const fromTo = text.match(/→\s*([A-ZĞÜŞİÖÇ]+)\s*→\s*([A-ZĞÜŞİÖÇ]+)/);
                            const distanceMatch = text.match(/(\d+)\s*km/);
                            
                            if (fromTo && distanceMatch) {
                                return {
                                    from: fromTo[1].trim(),
                                    to: fromTo[2].trim(),
                                    distance: parseInt(distanceMatch[1], 10)
                                };
                            }
                            
                            return null;
                        }).filter(item => item !== null);
                        
                        // Rotayı haritada göster
                        animateRoute(route, cityCoordinates, detailedDistances);
                        
                        // Haritaya kaydır
                        document.querySelector('.map-container').scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 600); // Hesaplama sonrasında çalışması için hafif gecikme
        });
    });

    // Harita lejantını oluştur
    function createMapLegend() {
        const mapContainer = document.querySelector('.map-container');
        
        // Mevcut bir lejant varsa kaldır
        const existingLegend = document.querySelector('.legend');
        if (existingLegend) {
            existingLegend.remove();
        }
        
        const legend = document.createElement('div');
        legend.className = 'legend';
        
        legend.innerHTML = `
            <div class="legend-item">
                <div class="legend-color" style="background-color: #e74c3c;"></div>
                <span>Rota Şehirleri</span>
            </div>
            <div class="legend-item">
                <div style="width: 15px; height: 2px; background-color: #e74c3c; margin-right: 8px;"></div>
                <span>Rota</span>
            </div>
        `;
        
        mapContainer.appendChild(legend);
    }

    // Orijinal calculateRoute fonksiyonunu değiştir
    const originalCalculateRoute = calculateRoute;

    calculateRoute = function(distances) {
        // Önce orijinal fonksiyonu çağır
        originalCalculateRoute(distances);
        
        // Sonuç gösteriliyorsa ve rota varsa haritada göster
        setTimeout(() => {
            const resultDiv = document.getElementById('result');
            if (resultDiv.classList.contains('visible')) {
                // Rota verilerini al
                const routeDisplay = document.getElementById('route-display');
                if (routeDisplay && routeDisplay.textContent) {
                    // Rota bilgisini ayıkla
                    const routeText = routeDisplay.innerHTML;
                    const cities = Array.from(routeDisplay.querySelectorAll('span')).map(span => span.textContent.trim());
                    
                    // Detaylı mesafeleri al
                    const detailedDistancesContainer = document.getElementById('detailed-distances');
                    const distanceItems = detailedDistancesContainer.querySelectorAll('li');
                    
                    const detailedDistances = Array.from(distanceItems).map(item => {
                        const fromToMatch = item.textContent.match(/([A-ZĞÜŞİÖÇ]+)\s*→\s*([A-ZĞÜŞİÖÇ]+)/);
                        const distanceMatch = item.textContent.match(/(\d+)\s*km/);
                        
                        if (fromToMatch && distanceMatch) {
                            return {
                                from: fromToMatch[1].trim(),
                                to: fromToMatch[2].trim(),
                                distance: parseInt(distanceMatch[1], 10)
                            };
                        }
                        
                        return null;
                    }).filter(item => item !== null);
                    
                    // Lejantı oluştur
                    createMapLegend();
                    
                    // Rotayı haritada göster
                    animateRoute(cities, cityCoordinates, detailedDistances);
                    
                    // Haritaya kaydır
                    document.querySelector('.map-container').scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 600);
    };

    // Sayfa boyutu değiştiğinde haritayı güncelle
    window.addEventListener('resize', function() {
        // Eğer rota çizilmişse, boyut değişiminde yeniden çiz
        const routeOverlay = document.getElementById('route-overlay');
        const resultDiv = document.getElementById('result');
        
        if (routeOverlay && resultDiv.classList.contains('visible')) {
            // Rota bilgilerini yeniden al
            const routeDisplay = document.getElementById('route-display');
            if (routeDisplay && routeDisplay.textContent) {
                const cities = Array.from(routeDisplay.querySelectorAll('span')).map(span => span.textContent.trim());
                
                const detailedDistancesContainer = document.getElementById('detailed-distances');
                const distanceItems = detailedDistancesContainer.querySelectorAll('li');
                
                const detailedDistances = Array.from(distanceItems).map(item => {
                    const fromToMatch = item.textContent.match(/([A-ZĞÜŞİÖÇ]+)\s*→\s*([A-ZĞÜŞİÖÇ]+)/);
                    const distanceMatch = item.textContent.match(/(\d+)\s*km/);
                    
                    if (fromToMatch && distanceMatch) {
                        return {
                            from: fromToMatch[1].trim(),
                            to: fromToMatch[2].trim(),
                            distance: parseInt(distanceMatch[1], 10)
                        };
                    }
                    
                    return null;
                }).filter(item => item !== null);
                
                // Rotayı haritada yeniden göster
                animateRoute(cities, cityCoordinates, detailedDistances);
            }
        }
    }, 250);