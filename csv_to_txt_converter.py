import pandas as pd

# CSV dosyasını noktalı virgül ile ayırarak oku
df = pd.read_csv("C:\\Users\\mertu\\OneDrive\\Masaüstü\\ilmesafe.csv", 
                 encoding="cp1254", 
                 sep=";")

# NaN değerlerini işle
df = df.fillna('')

# Her şehir için (B3'ten B83'e kadar) sözlük oluştur
with open("sonuc.txt", "w", encoding="utf-8") as dosya:
    # İlk satır başlıkları içeriyor, ikinci satırdan başlayarak işleyelim (index 1'den başlar)
    for i in range(1, df.shape[0]):  # 1'den başlayıp dosyadaki satır sayısına kadar
        il_adi = df.iloc[i, 1]  # İl adı 2. sütunda (index 1)
        
        # Boş il adlarını atla
        if il_adi == '':
            continue
            
        dosya.write(f"{il_adi}{{\n")
        
        # Her sütun için (3. sütundan başlayarak)
        for j in range(2, df.shape[1]):  # 3. sütundan (index 2) son sütuna kadar
            # 0. satırdaki sütun başlığı (şehir adı)
            hedef_il = df.iloc[0, j]
            # i. satır, j. sütundaki değer (mesafe)
            mesafe = df.iloc[i, j]
            
            # Boş değerleri atla
            if hedef_il != '' and mesafe != '':
                dosya.write(f"{hedef_il}, {mesafe}\n")
        
        dosya.write("}\n\n")

print("İşlem tamamlandı. Veriler 'sonuc.txt' dosyasına kaydedildi.")