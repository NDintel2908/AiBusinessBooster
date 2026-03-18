import json
import os

langs = ["us", "vi", "th", "jp"]
base_path = r"c:\Users\huynh\Downloads\LandingpageBCP\LandingpageBCP\client\src\locales"

new_sectors = {
    "manufacturing": {
        "softwareAndComputer": {"name": "Software and Computer Services", "description": ""},
        "telecommunicationsProviders": {"name": "Telecommunications Service Providers", "description": ""},
        "healthCare": {"name": "Health Care Providers", "description": ""},
        "banks": {"name": "Banks", "description": ""},
        "financeAndCredit": {"name": "Finance and Credit Services", "description": ""},
        "investmentBanking": {"name": "Investment Banking and Brokerage Services", "description": ""},
        "mortgageRealEstate": {"name": "Mortgage Real Estate Investment Trusts", "description": ""},
        "closedEndInvestments": {"name": "Closed End Investments", "description": ""},
        "openEndInvestments": {"name": "Open End and Miscellaneous Investment Vehicles", "description": ""},
        "lifeInsurance": {"name": "Life Insurance", "description": ""},
        "nonlifeInsurance": {"name": "Nonlife Insurance", "description": ""},
        "realEstateDev": {"name": "Real Estate Investment and Services Development", "description": ""},
        "realEstateTrusts": {"name": "Real Estate Investment Trusts", "description": ""},
        "consumerServices": {"name": "Consumer Services", "description": ""},
        "media": {"name": "Media", "description": ""},
        "retailers": {"name": "Retailers", "description": ""},
        "travelAndLeisure": {"name": "Travel and Leisure", "description": ""},
        "personalCare": {"name": "Personal Care, Drug and Grocery Stores", "description": ""},
        "industrialSupport": {"name": "Industrial Support Services", "description": ""},
        "industrialTransportation": {"name": "Industrial Transportation", "description": ""},
        "alternativeEnergy": {"name": "Alternative Energy", "description": ""},
        "electricity": {"name": "Electricity", "description": ""},
        "gasWater": {"name": "Gas, Water and Multi-utilities", "description": ""},
        "wasteAndDisposal": {"name": "Waste and Disposal Services", "description": ""},
    },
    "technology": {
        "beverages": {"name": "Beverages", "description": ""},
        "foodProducers": {"name": "Food Producers", "description": ""},
        "tobacco": {"name": "Tobacco", "description": ""},
        "constructionMaterials": {"name": "Construction and Materials", "description": ""},
        "industrialMaterials": {"name": "Industrial Materials", "description": ""},
        "industrialMetals": {"name": "Industrial Metals and Mining", "description": ""},
        "preciousMetals": {"name": "Precious Metals and Mining", "description": ""},
        "chemicals": {"name": "Chemicals", "description": ""},
        "oilGasCoal": {"name": "Oil, Gas and Coal", "description": ""},
    },
    "services": {
        "medicalEquipment": {"name": "Medical Equipment and Services", "description": ""},
        "pharmaBiotech": {"name": "Pharmaceuticals and Biotechnology", "description": ""},
        "automobilesParts": {"name": "Automobiles and Parts", "description": ""},
        "householdGoods": {"name": "Household Goods and Home Construction", "description": ""},
        "leisureGoods": {"name": "Leisure Goods", "description": ""},
        "personalGoods": {"name": "Personal Goods", "description": ""},
        "electronicEquipment": {"name": "Electronic and Electrical Equipment", "description": ""},
        "generalIndustrials": {"name": "General Industrials", "description": ""},
    },
    "infrastructure": {
        "techHardware": {"name": "Technology Hardware and Equipment", "description": ""},
        "telecomEquipment": {"name": "Telecommunications Equipment", "description": ""},
        "aerospaceDefense": {"name": "Aerospace and Defense", "description": ""},
        "industrialEngineering": {"name": "Industrial Engineering", "description": ""},
    }
}

for lang in langs:
    file_path = os.path.join(base_path, lang, "landing", "BusinessSectorsSection.json")
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Keep titles, replace sectors
    for group_key in ["manufacturing", "technology", "services", "infrastructure"]:
        if group_key in data["businessSectors"]["businessGroups"]:
            data["businessSectors"]["businessGroups"][group_key]["sectors"] = new_sectors[group_key]

    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("JSON updated successfully")
