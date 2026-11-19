const healthData = {
  Naveen: {
    CBC: {
      "Haemoglobin": {
        unit: "g/dL", refRange: {min: 13, max: 17},
        values: {2022: 15.5, 2023: 14.2, 2024: 14.3, 2026: 14.1}
      },
      "Total WBC Count": {
        unit: "Cells/cumm", refRange: {min: 4000, max: 10000},
        values: {2022: 5710, 2023: 6000, 2024: 5270, 2026: 5540}
      },
      "RBC Count": {
        unit: "Millions/cumm", refRange: {min: 4.5, max: 5.9},
        values: {2022: 5.1, 2023: 4.73, 2024: 4.85, 2026: 4.84}
      },
      "Platelet Count": {
        unit: "10³/µL", refRange: {min: 150, max: 450},
        values: {2022: 228, 2023: 220, 2024: 204, 2026: 243}
      },
      "Packed Cell Volume (PCV)": {
        unit: "%", refRange: {min: 40, max: 50},
        values: {2022: 46.5, 2023: 42.3, 2024: 43.3, 2026: 41.3}
      },
      "Mean Corpuscular Volume (MCV)": {
        unit: "fL", refRange: {min: 83, max: 101},
        values: {2022: 91.18, 2023: 89.5, 2024: 89.3, 2026: 85.5}
      },
      "Mean Corpuscular Hb. (MCH)": {
        unit: "pg", refRange: {min: 27, max: 32},
        values: {2022: 30.39, 2023: 30.0, 2024: 29.5, 2026: 29.2}
      },
      "MCHC": {
        unit: "g/dL", refRange: {min: 31.5, max: 34.5},
        values: {2022: 33.33, 2023: 33.6, 2024: 33.1, 2026: 34.1}
      },
      "Neutrophils": {
        unit: "%", refRange: {min: 40, max: 80},
        values: {2022: 49.1, 2023: 52, 2024: 51.4, 2026: 49.9}
      },
      "Lymphocytes": {
        unit: "%", refRange: {min: 20, max: 40},
        values: {2022: 44.9, 2023: 39, 2024: 38, 2026: 39.8}
      },
      "Erythrocyte Sedimentation Rate (ESR)": {
        unit: "mm/hr", refRange: {min: 0, max: 10},
        values: {2022: 5, 2023: 6, 2024: 7, 2026: 7}
      }
    },
    "Liver Function Test (LFT)": {
      "Total Bilirubin": {
        unit: "mg/dL", refRange: {max: 1.2},
        values: {2022: 2.05, 2023: 2.71, 2024: 2.53, 2026: 1.60}
      },
      "Direct Bilirubin": {
        unit: "mg/dL", refRange: {min: 0, max: 0.3},
        values: {2022: 0.34, 2023: 0.44, 2024: 0.44, 2026: 0.63}
      },
      "Indirect Bilirubin": {
        unit: "mg/dL", refRange: {min: 0.3, max: 1.0},
        values: {2022: 1.71, 2023: 2.27, 2024: 2.09, 2026: 0.97}
      },
      "SGOT / AST": {
        unit: "U/L", refRange: {max: 40},
        values: {2022: 31.60, 2023: 26.0, 2024: 20.4, 2026: 20.40}
      },
      "SGPT / ALT": {
        unit: "U/L", refRange: {max: 42},
        values: {2022: 17.80, 2023: 19.0, 2024: 13.4, 2026: 14.20}
      },
      "Alkaline Phosphatase": {
        unit: "U/L", refRange: {min: 40, max: 129},
        values: {2022: 100.80, 2023: 84.0, 2024: 73.7, 2026: 91.30}
      },
      "Total Protein": {
        unit: "g/dL", refRange: {min: 6.6, max: 8.7},
        values: {2022: 7.20, 2023: 7.00, 2024: 7.0, 2026: 6.81}
      },
      "Albumin": {
        unit: "g/dL", refRange: {min: 3.5, max: 5.2},
        values: {2022: 4.53, 2023: 4.20, 2024: 4.4, 2026: 4.42}
      },
      "Globulin": {
        unit: "g/dL", refRange: {min: 2.5, max: 4.5},
        values: {2022: 2.67, 2023: 2.8, 2024: 2.60, 2026: 2.39}
      },
      "Gamma Glutamyl Transferase (GGT)": {
        unit: "U/L", refRange: {min: 8, max: 61},
        values: {2022: 23.00, 2023: 20.0, 2024: 16.5, 2026: 16.60}
      }
    },
    "Kidney Function Test (KFT)": {
      "Urea": {
        unit: "mg/dL", refRange: {min: 16.6, max: 48.5},
        values: {2022: 21.48, 2023: null, 2024: 21.18, 2026: 21.30}
      },
      "BUN": {
        unit: "mg/dL", refRange: {min: 7, max: 18},
        values: {2022: 10.04, 2023: 9.8, 2024: 9.90, 2026: 9.95}
      },
      "Creatinine": {
        unit: "mg/dL", refRange: {min: 0.70, max: 1.20},
        values: {2022: 0.76, 2023: 0.80, 2024: 0.82, 2026: 0.82}
      },
      "Uric Acid": {
        unit: "mg/dL", refRange: {min: 3.4, max: 7.0},
        values: {2022: 4.53, 2023: 4.8, 2024: 5.19, 2026: 4.94}
      }
    },
    "Lipid Profile": {
      "Total Cholesterol": {
        unit: "mg/dL", refRange: {max: 200},
        values: {2022: 194.50, 2023: 174.0, 2024: 194.4, 2026: 193}
      },
      "HDL Cholesterol": {
        unit: "mg/dL", refRange: {min: 40},
        values: {2022: 49.50, 2023: 49.0, 2024: 51.7, 2026: 48}
      },
      "Total Triglycerides": {
        unit: "mg/dL", refRange: {max: 150},
        values: {2022: 97.00, 2023: 64.0, 2024: 86, 2026: 81.30}
      },
      "VLDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 30},
        values: {2022: 19.40, 2023: 12.8, 2024: 17.20, 2026: 16.26}
      },
      "LDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 100},
        values: {2022: 125.60, 2023: 106, 2024: 125.50, 2026: 128.74}
      },
      "Non - HDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 130},
        values: {2022: null, 2023: null, 2024: null, 2026: 145}
      }
    },
    "Diabetes": {
      "Fasting Glucose": {
        unit: "mg/dL", refRange: {min: 70, max: 110},
        values: {2022: 90.99, 2023: 90.0, 2024: 90.69, 2026: 81.0}
      },
      "Glycosylated Haemoglobin HbA1c": {
        unit: "%", refRange: {max: 5.6},
        values: {2022: 5.2, 2023: 5.1, 2024: 5.2, 2026: 5.2}
      }
    },
    "Thyroid Profile (TFT)": {
      "Triiodothyronine Total (TT3)": {
        unit: "ng/mL", refRange: {min: 0.80, max: 2.00},
        values: {2022: 0.811, 2023: 1.29, 2024: null, 2026: 1.15}
      },
      "Thyroxine (TT4)": {
        unit: "µg/dL", refRange: {min: 5.1, max: 14.1},
        values: {2022: 6.728, 2023: 10.0, 2024: null, 2026: 8.66}
      },
      "Thyroid Stimulating Hormone (TSH)": {
        unit: "µIU/mL", refRange: {min: 0.27, max: 4.2},
        values: {2022: 6.699, 2023: 4.738, 2024: null, 2026: 3.57}
      }
    },
    "Vitamins": {
      "Vitamin - B12": {
        unit: "pg/mL", refRange: {min: 191, max: 663},
        values: {2022: 255, 2023: null, 2024: null, 2026: 209}
      },
      "25 (OH) Vitamin-D": {
        unit: "ng/mL", refRange: {min: 30, max: 100},
        values: {2022: 32.0, 2023: null, 2024: null, 2026: 44.0}
      }
    },
    "Iron Profile": {
      "Iron": {
        unit: "µg/dL", refRange: {min: 59, max: 158},
        values: {2022: 87, 2023: null, 2024: null, 2026: null}
      },
      "Total Iron Binding Capacity (TIBC)": {
        unit: "µg/dL", refRange: {min: 250, max: 450},
        values: {2022: 301, 2023: null, 2024: null, 2026: null}
      },
      "Transferrin Saturation": {
        unit: "%", refRange: {min: 20, max: 50},
        values: {2022: 28.9, 2023: null, 2024: null, 2026: null}
      }
    }
  },

  Sravya: {
    CBC: {
      "Haemoglobin": {
        unit: "g/dL", refRange: {min: 12, max: 16},
        values: {2022: 13, 2023: 13.5, 2024: 13.1, 2026: 12.8}
      },
      "Total WBC Count": {
        unit: "Cells/cumm", refRange: {min: 4000, max: 10000},
        values: {2022: 4890, 2023: 4760, 2024: 6190, 2026: 5140}
      },
      "RBC Count": {
        unit: "Millions/cumm", refRange: {min: 3.8, max: 5.2},
        values: {2022: 3.85, 2023: 4.68, 2024: 4.38, 2026: 4.37}
      },
      "Platelet Count": {
        unit: "10³/µL", refRange: {min: 150, max: 450},
        values: {2022: 325, 2023: 356, 2024: 285, 2026: 364}
      },
      "Packed Cell Volume (PCV)": {
        unit: "%", refRange: {min: 36, max: 46},
        values: {2022: 35.8, 2023: 41.1, 2024: 39, 2026: 37.9}
      },
      "Mean Corpuscular Volume (MCV)": {
        unit: "fL", refRange: {min: 83, max: 101},
        values: {2022: 92.99, 2023: 87.82, 2024: 89.04, 2026: 86.7}
      },
      "Mean Corpuscular Hb. (MCH)": {
        unit: "pg", refRange: {min: 27, max: 32},
        values: {2022: 33.77, 2023: 28.85, 2024: 29.91, 2026: 29.3}
      },
      "MCHC": {
        unit: "g/dL", refRange: {min: 31.5, max: 34.5},
        values: {2022: null, 2023: 32.85, 2024: 33.59, 2026: 33.8}
      },
      "Neutrophils": {
        unit: "%", refRange: {min: 40, max: 80},
        values: {2022: null, 2023: 38.1, 2024: 42.6, 2026: 39.9}
      },
      "Lymphocytes": {
        unit: "%", refRange: {min: 20, max: 40},
        values: {2022: null, 2023: 50.8, 2024: 47.3, 2026: 48.0}
      },
      "Erythrocyte Sedimentation Rate (ESR)": {
        unit: "mm/hr", refRange: {min: 0, max: 12},
        values: {2022: 5, 2023: 18, 2024: 14, 2026: 16}
      }
    },
    "Liver Function Test (LFT)": {
      "Total Bilirubin": {
        unit: "mg/dL", refRange: {max: 1.2},
        values: {2022: 1.04, 2023: 0.72, 2024: 0.76, 2026: 0.39}
      },
      "Direct Bilirubin": {
        unit: "mg/dL", refRange: {min: 0, max: 0.3},
        values: {2022: 0.26, 2023: 0.16, 2024: 0.22, 2026: 0.18}
      },
      "Indirect Bilirubin": {
        unit: "mg/dL", refRange: {min: 0.3, max: 1.0},
        values: {2022: 0.78, 2023: 0.56, 2024: null, 2026: null}
      },
      "SGOT / AST": {
        unit: "U/L", refRange: {max: 40},
        values: {2022: 26.90, 2023: 23.20, 2024: 21.7, 2026: 19.80}
      },
      "SGPT / ALT": {
        unit: "U/L", refRange: {max: 42},
        values: {2022: 7.60, 2023: 10.80, 2024: 8.6, 2026: 11.20}
      },
      "Alkaline Phosphatase": {
        unit: "U/L", refRange: {min: 40, max: 129},
        values: {2022: 46.30, 2023: 50.10, 2024: 39.7, 2026: 47.70}
      },
      "Total Protein": {
        unit: "g/dL", refRange: {min: 6.6, max: 8.7},
        values: {2022: null, 2023: 7.40, 2024: 7.7, 2026: 7.50}
      },
      "Albumin": {
        unit: "g/dL", refRange: {min: 3.5, max: 5.2},
        values: {2022: null, 2023: 4.40, 2024: 4.5, 2026: 4.60}
      },
      "Globulin": {
        unit: "g/dL", refRange: {min: 2.5, max: 4.5},
        values: {2022: null, 2023: 3.0, 2024: 3.20, 2026: 2.90}
      },
      "Gamma Glutamyl Transferase (GGT)": {
        unit: "U/L", refRange: {min: 5, max: 36},
        values: {2022: null, 2023: 9.40, 2024: 11, 2026: 8.74}
      }
    },
    "Kidney Function Test (KFT)": {
      "Urea": {
        unit: "mg/dL", refRange: {min: 16.6, max: 48.5},
        values: {2022: 25.44, 2023: 16.30, 2024: 22.92, 2026: 27.0}
      },
      "BUN": {
        unit: "mg/dL", refRange: {min: 7, max: 18},
        values: {2022: 11.89, 2023: 7.62, 2024: 10.71, 2026: 12.62}
      },
      "Creatinine": {
        unit: "mg/dL", refRange: {min: 0.5, max: 1.1},
        values: {2022: 0.69, 2023: 0.67, 2024: 0.74, 2026: 0.68}
      },
      "Uric Acid": {
        unit: "mg/dL", refRange: {min: 2.4, max: 5.7},
        values: {2022: 4.60, 2023: 3.85, 2024: 4.89, 2026: 4.57}
      }
    },
    "Lipid Profile": {
      "Total Cholesterol": {
        unit: "mg/dL", refRange: {max: 200},
        values: {2022: 308.40, 2023: 261.30, 2024: 256.6, 2026: 295.0}
      },
      "HDL Cholesterol": {
        unit: "mg/dL", refRange: {min: 40},
        values: {2022: 61.50, 2023: 76.20, 2024: 78.8, 2026: 71.80}
      },
      "Total Triglycerides": {
        unit: "mg/dL", refRange: {max: 150},
        values: {2022: 94.70, 2023: 59.40, 2024: 133.3, 2026: 93.40}
      },
      "VLDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 30},
        values: {2022: 18.94, 2023: 11.88, 2024: 26.66, 2026: 18.68}
      },
      "LDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 100},
        values: {2022: 227.96, 2023: 173.22, 2024: 151.14, 2026: 204.52}
      },
      "Non - HDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 130},
        values: {2022: null, 2023: null, 2024: null, 2026: 223.20}
      }
    },
    "Diabetes": {
      "Fasting Glucose": {
        unit: "mg/dL", refRange: {min: 70, max: 110},
        values: {2022: 90.91, 2023: 90.46, 2024: 88.7, 2026: 79.20}
      },
      "Glycosylated Haemoglobin HbA1c": {
        unit: "%", refRange: {max: 5.6},
        values: {2022: 6.0, 2023: 5.36, 2024: 5.5, 2026: 5.1}
      }
    },
    "Thyroid Profile (TFT)": {
      "Triiodothyronine Total (TT3)": {
        unit: "ng/mL", refRange: {min: 0.80, max: 2.00},
        values: {2022: 0.832, 2023: 1.05, 2024: 0.99, 2026: 0.86}
      },
      "Thyroxine (TT4)": {
        unit: "µg/dL", refRange: {min: 5.1, max: 14.1},
        values: {2022: 8.789, 2023: 8.60, 2024: 9, 2026: 7.11}
      },
      "Thyroid Stimulating Hormone (TSH)": {
        unit: "µIU/mL", refRange: {min: 0.27, max: 4.2},
        values: {2022: null, 2023: 0.9712, 2024: 1.53, 2026: 1.28}
      }
    },
    "Vitamins": {
      "Vitamin - B12": {
        unit: "pg/mL", refRange: {min: 191, max: 663},
        values: {2022: 287, 2023: null, 2024: 202, 2026: 199}
      },
      "25 (OH) Vitamin-D": {
        unit: "ng/mL", refRange: {min: 30, max: 100},
        values: {2022: 31.0, 2023: 10.6, 2024: 12.1, 2026: 45.70}
      }
    },
    "Iron Profile": {
      "Iron": {
        unit: "µg/dL", refRange: {min: 37, max: 170},
        values: {2022: 68, 2023: null, 2024: 99.9, 2026: null}
      },
      "Total Iron Binding Capacity (TIBC)": {
        unit: "µg/dL", refRange: {min: 250, max: 450},
        values: {2022: 284, 2023: null, 2024: 352.50, 2026: null}
      },
      "Transferrin Saturation": {
        unit: "%", refRange: {min: 20, max: 50},
        values: {2022: 23.94, 2023: null, 2024: 28.34, 2026: null}
      }
    }
  },

  Kaarunya: {
    CBC: {
      "Haemoglobin": {
        unit: "g/dL", refRange: {min: 11.5, max: 15.5},
        values: {2022: 13.4, 2023: null, 2024: 12.9, 2026: 13.3}
      },
      "Total WBC Count": {
        unit: "Cells/cumm", refRange: {min: 4000, max: 10000},
        values: {2022: 5690, 2023: null, 2024: 5430, 2026: 5400}
      },
      "RBC Count": {
        unit: "Millions/cumm", refRange: {min: 3.82, max: 4.8},
        values: {2022: 4.31, 2023: null, 2024: 4.72, 2026: 4.67}
      },
      "Platelet Count": {
        unit: "10³/µL", refRange: {min: 150, max: 410},
        values: {2022: 387, 2023: null, 2024: 388, 2026: 364}
      },
      "Packed Cell Volume (PCV)": {
        unit: "%", refRange: {min: 36, max: 46},
        values: {2022: 37.7, 2023: null, 2024: 38.9, 2026: 39.4}
      },
      "Mean Corpuscular Volume (MCV)": {
        unit: "fL", refRange: {min: 83, max: 101},
        values: {2022: 87.47, 2023: null, 2024: 82.42, 2026: 84.3}
      },
      "Mean Corpuscular Hb. (MCH)": {
        unit: "pg", refRange: {min: 27, max: 32},
        values: {2022: 31.09, 2023: null, 2024: 27.33, 2026: 28.4}
      },
      "MCHC": {
        unit: "g/dL", refRange: {min: 31.5, max: 34.5},
        values: {2022: 35.54, 2023: null, 2024: 33.16, 2026: 33.7}
      },
      "Neutrophils": {
        unit: "%", refRange: {min: 40, max: 80},
        values: {2022: 43.6, 2023: null, 2024: 43.2, 2026: 42.3}
      },
      "Lymphocytes": {
        unit: "%", refRange: {min: 20, max: 40},
        values: {2022: 46.6, 2023: null, 2024: 45.8, 2026: 46.8}
      },
      "Erythrocyte Sedimentation Rate (ESR)": {
        unit: "mm/hr", refRange: {min: 0, max: 12},
        values: {2022: null, 2023: null, 2024: null, 2026: 10}
      }
    },
    "Liver Function Test (LFT)": {
      "Total Bilirubin": {
        unit: "mg/dL", refRange: {max: 1.2},
        values: {2022: null, 2023: null, 2024: null, 2026: 0.60}
      },
      "Direct Bilirubin": {
        unit: "mg/dL", refRange: {min: 0, max: 0.3},
        values: {2022: null, 2023: null, 2024: null, 2026: 0.30}
      },
      "Indirect Bilirubin": {
        unit: "mg/dL", refRange: {min: 0.3, max: 1.0},
        values: {2022: null, 2023: null, 2024: null, 2026: 0.30}
      },
      "SGOT / AST": {
        unit: "U/L", refRange: {max: 40},
        values: {2022: null, 2023: null, 2024: null, 2026: 25.70}
      },
      "SGPT / ALT": {
        unit: "U/L", refRange: {max: 42},
        values: {2022: null, 2023: null, 2024: null, 2026: 17.00}
      },
      "Alkaline Phosphatase": {
        unit: "U/L", refRange: {min: 129, max: 417},
        values: {2022: 228.80, 2023: null, 2024: 251.4, 2026: 328.00}
      },
      "Total Protein": {
        unit: "g/dL", refRange: {min: 6.6, max: 8.7},
        values: {2022: null, 2023: null, 2024: null, 2026: 7.04}
      },
      "Albumin": {
        unit: "g/dL", refRange: {min: 3.5, max: 5.2},
        values: {2022: null, 2023: null, 2024: null, 2026: 4.47}
      },
      "Globulin": {
        unit: "g/dL", refRange: {min: 2.5, max: 4.5},
        values: {2022: null, 2023: null, 2024: null, 2026: 2.57}
      },
      "Gamma Glutamyl Transferase (GGT)": {
        unit: "U/L", refRange: {min: 5, max: 36},
        values: {2022: null, 2023: null, 2024: null, 2026: 10.30}
      }
    },
    "Kidney Function Test (KFT)": {
      "Urea": {
        unit: "mg/dL", refRange: {min: 16.6, max: 48.5},
        values: {2022: null, 2023: null, 2024: null, 2026: 22.80}
      },
      "BUN": {
        unit: "mg/dL", refRange: {min: 7, max: 18},
        values: {2022: null, 2023: null, 2024: null, 2026: 10.65}
      },
      "Creatinine": {
        unit: "mg/dL", refRange: {min: 0.53, max: 0.79},
        values: {2022: null, 2023: null, 2024: null, 2026: 0.50}
      },
      "Uric Acid": {
        unit: "mg/dL", refRange: {min: 2.4, max: 5.7},
        values: {2022: null, 2023: null, 2024: null, 2026: 3.41}
      }
    },
    "Lipid Profile": {
      "Total Cholesterol": {
        unit: "mg/dL", refRange: {max: 200},
        values: {2022: null, 2023: null, 2024: null, 2026: 171.0}
      },
      "HDL Cholesterol": {
        unit: "mg/dL", refRange: {min: 40},
        values: {2022: null, 2023: null, 2024: null, 2026: 64.20}
      },
      "Total Triglycerides": {
        unit: "mg/dL", refRange: {max: 150},
        values: {2022: null, 2023: null, 2024: null, 2026: 55.20}
      },
      "VLDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 30},
        values: {2022: null, 2023: null, 2024: null, 2026: 11.04}
      },
      "LDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 100},
        values: {2022: null, 2023: null, 2024: null, 2026: 95.76}
      },
      "Non - HDL Cholesterol": {
        unit: "mg/dL", refRange: {max: 130},
        values: {2022: null, 2023: null, 2024: null, 2026: 106.80}
      }
    },
    "Diabetes": {
      "Fasting Glucose": {
        unit: "mg/dL", refRange: {min: 70, max: 110},
        values: {2022: 75.78, 2023: null, 2024: 76.09, 2026: 75.20}
      },
      "Glycosylated Haemoglobin HbA1c": {
        unit: "%", refRange: {max: 5.6},
        values: {2022: 5.2, 2023: null, 2024: 4.96, 2026: 5.0}
      }
    },
    "Thyroid Profile (TFT)": {
      "Triiodothyronine Total (TT3)": {
        unit: "ng/mL", refRange: {min: 0.91, max: 2.18},
        values: {2022: null, 2023: null, 2024: null, 2026: 1.10}
      },
      "Thyroxine (TT4)": {
        unit: "µg/dL", refRange: {min: 5.1, max: 14.1},
        values: {2022: null, 2023: null, 2024: null, 2026: 5.72}
      },
      "Thyroid Stimulating Hormone (TSH)": {
        unit: "µIU/mL", refRange: {min: 0.51, max: 4.30},
        values: {2022: null, 2023: null, 2024: null, 2026: 3.12}
      }
    },
    "Vitamins": {
      "Vitamin - B12": {
        unit: "pg/mL", refRange: {min: 187, max: 883},
        values: {2022: 255, 2023: null, 2024: 349, 2026: 392}
      },
      "25 (OH) Vitamin-D": {
        unit: "ng/mL", refRange: {min: 30, max: 100},
        values: {2022: 14.1, 2023: 14.3, 2024: 10.7, 2026: 45.60}
      },
      "Folic Acid (Folate)": {
        unit: "ng/mL", refRange: {min: 4.8, max: 37.3},
        values: {2022: 7.39, 2023: null, 2024: 5.2, 2026: null}
      }
    },
    "Iron Profile": {
      "Iron": {
        unit: "µg/dL", refRange: {min: 37, max: 170},
        values: {2022: 114.10, 2023: null, 2024: 63.8, 2026: null}
      },
      "Total Iron Binding Capacity (TIBC)": {
        unit: "µg/dL", refRange: {min: 250, max: 450},
        values: {2022: 361.30, 2023: null, 2024: 430.80, 2026: null}
      },
      "Transferrin Saturation": {
        unit: "%", refRange: {min: 13, max: 45},
        values: {2022: 31.58, 2023: null, 2024: 14.81, 2026: null}
      }
    },
    "Electrolytes & Minerals": {
      "Calcium Total (Serum)": {
        unit: "mg/dL", refRange: {min: 8.5, max: 10.6},
        values: {2022: 9.97, 2023: null, 2024: 9.713, 2026: null}
      },
      "Phosphorus": {
        unit: "mg/dL", refRange: {min: 2.5, max: 4.5},
        values: {2022: 4.5, 2023: null, 2024: 5.49, 2026: null}
      }
    }
  }
};
