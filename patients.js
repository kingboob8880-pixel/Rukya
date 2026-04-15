// ============================================================
//  patients.js — ТОЛЬКО ЭТОТ ФАЙЛ ВЫ РЕДАКТИРУЕТЕ
//  Чтобы добавить пациента: скопируйте блок { ... } внутри
//  нужной группы и заполните данные.
//  Чтобы добавить группу: скопируйте блок { id, name, ... }
// ============================================================

var PATIENTS = [

  // ──────────────────────────────────────────
  //  ГРУППА 1
  // ──────────────────────────────────────────
  {
    id: "g1",
    name: "Семья Назаровых",
    city: "Бухара",
    patients: [

      {
        name: "Умида Назарова",
        age: 34,
        city: "Бухара",
        type: "сихр",           // сихр / джинн / сглаз / зависть
        status: "active",       // active / done
        progress: 65,           // 0–100
        avatar_color: "#FAECE7",
        avatar_text_color: "#993C1D",
        file: "umida.html"      // ссылка на HTML-отчёт пациента
      },

      {
        name: "Бахром Назаров",
        age: 41,
        city: "Бухара",
        type: "джинн",
        status: "active",
        progress: 40,
        avatar_color: "#EEEDFE",
        avatar_text_color: "#534AB7",
        file: "bahrom.html"
      },

      {
        name: "Малика Назарова",
        age: 27,
        city: "Бухара",
        type: "сглаз",
        status: "active",
        progress: 75,
        avatar_color: "#FAEEDA",
        avatar_text_color: "#854F0B",
        file: "malika.html"
      }

    ]
  },

  // ──────────────────────────────────────────
  //  ГРУППА 2
  // ──────────────────────────────────────────
  {
    id: "g2",
    name: "Семья Рахимовых",
    city: "Фергана",
    patients: [

      {
        name: "Дилноза Рахимова",
        age: 38,
        city: "Фергана",
        type: "зависть",
        status: "done",
        progress: 100,
        avatar_color: "#FBEAF0",
        avatar_text_color: "#993556",
        file: "dilnoza.html"
      },

      {
        name: "Санжар Рахимов",
        age: 29,
        city: "Фергана",
        type: "сихр",
        status: "active",
        progress: 30,
        avatar_color: "#E6F1FB",
        avatar_text_color: "#185FA5",
        file: "sanzhar.html"
      }

    ]
  },

  // ──────────────────────────────────────────
  //  ГРУППА 3 — индивидуальные
  // ──────────────────────────────────────────
  {
    id: "g3",
    name: "Индивидуальные",
    city: "",
    patients: [

      {
        name: "Алишер Камолов",
        age: 45,
        city: "Ташкент",
        type: "джинн",
        status: "active",
        progress: 55,
        avatar_color: "#EEEDFE",
        avatar_text_color: "#3C3489",
        file: "alisher.html"
      }

    ]
  }

];
