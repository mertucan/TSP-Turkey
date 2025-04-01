import json

def parse_txt_to_json(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        data = file.readlines()

    city_distances = {}
    current_city = None

    for line in data:
        line = line.strip()
        if not line:
            continue
        if "{" in line:  # Şehir ismi geldiğinde yeni bir key oluştur
            current_city = line.replace("{", "").strip()
            city_distances[current_city] = {}
        elif current_city and "," in line:  # Mesafeleri ekle
            destination, distance = line.rsplit(",", 1)  # Son virgüle göre ayır
            city_distances[current_city][destination.strip()] = int(distance.strip())

    return city_distances

# Dosya yolu
file_path = "C:\\Users\\mertu\\OneDrive\\Masaüstü\\Gezgin Satıcı\\sonuc.txt"
json_data = parse_txt_to_json(file_path)

# JSON çıktısını kaydetme
with open("sehirler.json", "w", encoding="utf-8") as json_file:
    json.dump(json_data, json_file, ensure_ascii=False, indent=4)

print("JSON formatına dönüştürüldü: sehirler.json")