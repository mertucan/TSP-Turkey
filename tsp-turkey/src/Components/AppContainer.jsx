import React from 'react'

const AppContainer = () => {
  return (
    <div class="app-container">
        <div class="selection-panel">
            <div class="panel-title">Şehir Seçimi</div>
            <div class="city-selection">
                <label for="city1"><i class="fas fa-map-marker-alt"></i> Başlangıç Şehri:</label>
                <select id="city1"></select>
            </div>
            
            <div id="cities-container">
                <div class="city-selection">
                    <label for="city2"><i class="fas fa-route"></i> Şehir1 Adı:</label>
                    <select id="city2"></select>
                </div>
            </div>
            
            <div class="button-group">
                <div class="action-button add-button">
                    <button id="add-city"><i class="fas fa-plus"></i></button>
                    <span>Yeni Şehir Ekle</span>
                </div>
                <div class="action-button delete-button">
                    <button id="delete-city"><i class="fas fa-minus"></i></button>
                    <span>Son Şehri Sil</span>
                </div>
            </div>
            
            <button class="calculate-button" id="calculate">
                <i class="fas fa-calculator"></i> Rotayı Hesapla
            </button>
            
            <div class="loading" id="loading">
                <i class="fas fa-spinner"></i>
            </div>
        </div>
        
        <div id="result">
            <h3><i class="fas fa-map"></i> En Kısa Rota</h3>
            <div class="result-route" id="route-display"></div>
            
            <h3><i class="fas fa-road"></i> Toplam Mesafe</h3>
            <div class="result-distance">
                <i class="fas fa-ruler"></i>
                <span id="distance-display"></span>
            </div>
            
            <h3><i class="fas fa-route"></i> Detaylı Mesafeler</h3>
            <div class="detailed-distances" id="detailed-distances"></div>
        </div>
    </div>
  )
}

export default AppContainer