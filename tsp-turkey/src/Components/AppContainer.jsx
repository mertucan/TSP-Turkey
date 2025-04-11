import React from 'react'

const AppContainer = () => {
  const clearRoute = () => {
    // Mevcut SVG overlay'i bul ve temizle
    const existingSvg = document.getElementById('route-overlay');
    if (existingSvg) {
      while (existingSvg.firstChild) {
        existingSvg.removeChild(existingSvg.firstChild);
      }
      existingSvg.remove();
    }

    // Map container içindeki tüm SVG elementlerini temizle
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
      const allSvgElements = mapContainer.querySelectorAll('svg');
      allSvgElements.forEach(svg => {
        while (svg.firstChild) {
          svg.removeChild(svg.firstChild);
        }
        svg.remove();
      });
    }

    // Sonuç panelini gizle
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      resultDiv.classList.remove('visible');
    }

    // Harita lejantını kaldır
    const existingLegend = document.querySelector('.legend');
    if (existingLegend) {
      existingLegend.remove();
    }

    showNotification('Rota başarıyla temizlendi!', 'success');
  };

  const showNotification = (message, type) => {
    alert(message); // Basit bir alert, istersen özelleştirebiliriz
  };

  return (
    <div className="app-container">
      <div className="selection-panel">
        <div className="panel-title">Şehir Seçimi</div>
        <div className="city-selection">
          <label htmlFor="city1"><i className="fas fa-map-marker-alt"></i> Başlangıç Şehri:</label>
          <select id="city1"></select>
        </div>

        <div id="cities-container">
          <div className="city-selection">
            <label htmlFor="city2"><i className="fas fa-route"></i> Şehir1 Adı:</label>
            <select id="city2"></select>
          </div>
        </div>

        <div className="button-group">
          <div className="action-button add-button">
            <button id="add-city"><i className="fas fa-plus"></i></button>
            <span>Yeni Şehir Ekle</span>
          </div>
          <div className="action-button delete-button">
            <button id="delete-city"><i className="fas fa-minus"></i></button>
            <span>Son Şehri Sil</span>
          </div>
        </div>

        <button className="calculate-button" id="calculate">
          <i className="fas fa-calculator"></i> Rotayı Hesapla
        </button>

        <button className="clear-button" id="clear-route" onClick={clearRoute}>
          <i className="fas fa-trash-alt"></i> Rotayı Temizle
        </button>

        <div className="loading" id="loading">
          <i className="fas fa-spinner"></i>
        </div>
      </div>

      <div id="result">
        <h3><i className="fas fa-map"></i> En Kısa Rota</h3>
        <div className="result-route" id="route-display"></div>

        <h3><i className="fas fa-road"></i> Toplam Mesafe</h3>
        <div className="result-distance">
          <i className="fas fa-ruler"></i>
          <span id="distance-display"></span>
        </div>

        <h3><i className="fas fa-route"></i> Detaylı Mesafeler</h3>
        <div className="detailed-distances" id="detailed-distances"></div>
      </div>
    </div>
  )
}

export default AppContainer;
