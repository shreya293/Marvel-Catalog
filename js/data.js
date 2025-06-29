const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    poster: "data:image/jpeg;base64,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",
    summary: "After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more to undo Thanos' actions.",
    ott: ["Disney+"],
    characters: [
      {
        name: "Iron Man",
        actor: "Robert Downey Jr.",
        description: "Genius billionaire who sacrifices himself to save the universe.",
        image: "https://i.pinimg.com/236x/a2/6f/02/a26f022f95423ba4f4cfcd68b9a5c489.jpg"
        
      },
      {
        name: "Captain America",
        actor: "Chris Evans",
        description: "Returns the Infinity Stones and grows old.",
        image: "https://resizing.flixster.com/QhV5t7Clt1sQdzCysh3ZKBnhgXI=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/v9/AllPhotos/173489/173489_v9_ba.jpg"
      },
      {
        name: "Thor",
        actor: "Chris Hemsworth",
        description: "God of Thunder. Struggles with guilt over failing to stop Thanos. Joins the Guardians of the Galaxy at the end.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EknajJ4Xz6e-IvIue4ZAt27k2Y_KpCPKOw&s"
      },
      {
        name: "Black Widow",
        actor: "Natasha Romanoff",
        description: "Master spy and fighter. Sacrifices herself on Vormir to obtain the Soul Stone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHyuaVi9OLgOeiIRChm0g24VCsBtDak_YXQ&s"
      },
      {
        name: "Hulk",
        actor: "Mark Ruffalo",
        description: "The Mad Titan who wiped out half of all life. Fights the Avengers from the past timeline in the final   battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKx8oOvGPh0yWO7KhFnOEadXHsxzSdzP29GQ&s"
        },
        {
        name: "Thanos",
        actor: "Josh Brolin",
        description: "Brilliant scientist who merges his intelligence with Hulk's strength, becoming 'Smart Hulk'. Uses the   gauntlet to reverse the Snap.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tf300cQKvYh5euRbNmXlFjAxXI-zGkklmw&s"
        },
        {
        name: "Hawkeye",
        actor: "Jeremy Renner",
        description: "Expert marksman and assassin. Becomes Ronin after losing his family in the Snap. Helps retrieve the Soul Stone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmnH_b7rtd9xSOwP5_nZ4T_hLmXgUFqYBRQ&s"
        
        },
        {
        name: "Okoye",
        actor: "Danai Gurira",
        description: "Dora Milaje general of Wakanda. Joins the battle against Thanos.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTjcxl6PGOWQHHQc0FsJFiPqxqUZT5THnUg&s"
        },
        {
        name: "Pepper Potts",
        actor: "Gwyneth Paltrow",
        description: "Tony Stark’s wife. Wears the Rescue armor in the final battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBV2IMJDwdoLT_KfoPQ4NmoRfgvdTB80VsQ&s"
      },
      {
        name: "Valkyrie",
        actor: "Tessa Thompson",
        description: "Leader of the surviving Asgardians. Helps evacuate survivors and fights in the final battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIYRxtNkA3v4x-8P85Ir_tJbvHnf47oFzhA&s"
        },
        {
        name: "Wong",
        actor: "Benedict Wong",
        description: "Master of the Mystic Arts. Brings reinforcements to the final battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTM6E4kyTi7oKgCCUwtTzbohy3HvdC_a9q1pU8QiMh0c33xIp5DPdaKiB5OY63kpdHNI&usqp=CAU"
        },
        {
        name: "Doctor Strange",
        actor: "Benedict Cumberbatch",
        description: "Master of the Mystic Arts. Guides the heroes and orchestrates the final battle strategy.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVgbd3wXxcoS7mzqIlhFBEUWVCltGiXFwGQ&s"
        },
        {
        name: "Spider-Man",
        actor: "Tom Holland",
        description: "Teenage superhero. Returns from being snapped and fights alongside the Avengers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7sHjueHYHXnfKfh1E1Py60yPIK7Z9lt4vQ&s"
        },
        {
        name: "Star-Lord",
        actor: "Chris Pratt",
        description: "Leader of the Guardians. Returns to help fight Thanos’ army.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVEnkoGF_Ez_OOgBo-PQrtC7-Bv6FAfu22Q&s"
        },
        {
        name: "Drax",
        actor: "Dave Bautista",
        description: "Member of the Guardians. Fights in the final battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveJqWeFcX-vLLYO92RCP4WnjGMu1IhT5rpQ&s"
        },
        {
        name: "Mantis",
        actor: "Pom Klementieff",
        description: "Empath and Guardian. Helps in the fight against Thanos.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRtmKcOXRULfHdHaVxigb1bG2Iy0ECQE16Q&s"
        },
        {
        name: "Groot",
        actor: "Vin Diesel (voice)",
        description: "Teenage tree-like Guardian. Returns after the Snap and joins the battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwJMRJgfySQIAjMtBOSthSS_psn9XPO5hDA&s"
        },
        {
        name: "Nebula",
        actor: "Karen Gillan",
        description: "Thanos' daughter who resists his plan.",
        image: "https://resizing.flixster.com/VO-h3pUXPRbEkHW72PoRaTxsGWY=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/572089_v9_bd.jpg"
       },
        {
        name: "Scarlet Witch",
        actor: "Elizabeth Olsen",
        description: "Possesses telekinetic and energy powers. Nearly defeats Thanos single-handedly out of vengeance for Vision.    ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHNqLMOEU0oa1jK4W1DEzvVuZeOl1mUiehw&s"
        },
        {
        name: "Falcon",
        actor: "Anthony Mackie",
        description: "Former pararescue soldier with mechanical wings. Fights in the final battle. Chosen by Steve Rogers to     carry the Captain America mantle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAMZobg7pIOkQDPaA2tZWMYFW27BpQBYBUA&s"
        },
        {
        name: "Winter Soldier",
        actor: "Sebastian Stan",
        description: "Steve Rogers' best friend, super soldier. Returns to fight Thanos' forces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4Gnz6ZLj_KCK5DX46NYGA0Fc-wVCwhOIUA&s"
        }
      


    ],
    crew: [
      {
        name: "Anthony and JoeRusso",
        role: "Directors",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49Pjx8qtSGUUTpZBLf_YmbWXj6y4Pf9RakmnTzQu_I-URx16fIGffKqigaXmgM9F6UGU&usqp=CAU"
      },
      {
        name: "Christopher Markus anf Stephen McFreely",
        role: "Writer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXgd0Uq2r3P_Z_K5gkgEpy2KgnecO9o8HMQ&s"
      },
      {
        role: "Producer",
        name: "Kevin Feige",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34cX8ybRibmy8oE8FshqpUHAk239lQUzzzA&s"
      },
      {
        role: "Music",
        name: "Alan Silvestri",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiqaWa4H65MO_dYqDq6eP-Grm0LOaVXxBkA&s"
      },
     {
        role: "Cinematography",
        name: "Trent Opaloch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSue2ZFeKEU2I4ZWebDE5V-8LJoNqZ8xdFWJ27zkSic7Aksdbpce1HZEcJgorvMDWBNQNs&usqp=CAU"
      },
      {
        role: "Editors",
        name: "Jeffrey Ford and Matthew Schmidt",
        image: "https://cdn-uploads.huggingface.co/production/uploads/noauth/vU3kUCGamfFUNt0QgNEET.jpeg"
    }
    ],
    events: [
      "World Premiere in Los Angeles",
      "San Diego Comic-Con 2019 Panel"
    ],
    updates: [
      "Ironheart series confirmed."
    ],
    reviews: []
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    releaseDate: "2018-04-27",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsZRFiO4w792Ksjtq4iNorMfFBxW07Xg9Nw&s",
    summary: "The Avengers face their deadliest enemy yet: Thanos, who seeks the Infinity Stones.",
    ott: ["Disney+"],
    characters: [
       {
        name: "Iron Man",
        actor: "Robert Downey Jr.",
        description: "Genius billionaire who sacrifices himself to save the universe.",
        image: "https://i.pinimg.com/236x/a2/6f/02/a26f022f95423ba4f4cfcd68b9a5c489.jpg"
        
      },
      {
        name: "Captain America",
        actor: "Chris Evans",
        description: "Returns the Infinity Stones and grows old.",
        image: "https://resizing.flixster.com/QhV5t7Clt1sQdzCysh3ZKBnhgXI=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/v9/AllPhotos/173489/173489_v9_ba.jpg"
      },
      {
        name: "Thor",
        actor: "Chris Hemsworth",
        description: "Seeks vengeance for Asgard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EknajJ4Xz6e-IvIue4ZAt27k2Y_KpCPKOw&s"
      },
      {
        name: "Black Widow",
        actor: "Scarlett Johansson",
        description: "Expert spy and fighter leading the Avengers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHyuaVi9OLgOeiIRChm0g24VCsBtDak_YXQ&s"
      },
      {
        name: "Hulk",
        actor: "Mark Ruffalo",
        description: "The Mad Titan who wiped out half of all life. Fights the Avengers from the past timeline in the final   battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKx8oOvGPh0yWO7KhFnOEadXHsxzSdzP29GQ&s"
      },
      {
        name: "Thanos",
        actor: "Josh Brolin",
        description: "Brilliant scientist who merges his intelligence with Hulk's strength, becoming 'Smart Hulk'. Uses the   gauntlet to reverse the Snap.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tf300cQKvYh5euRbNmXlFjAxXI-zGkklmw&s"
      },
      {
        name: "Hawkeye",
        actor: "Jeremy Renner",
        description: "Expert marksman and assassin. Becomes Ronin after losing his family in the Snap. Helps retrieve the Soul Stone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmnH_b7rtd9xSOwP5_nZ4T_hLmXgUFqYBRQ&s"
        
      },
      {
        name: "Vision",
        actor: "Paul Bettany",
        description: "Android with Mind Stone. Target of Thanos' forces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUx87UDkP7b8kaM95hBjNbBMNWPEw3M5N5A&s"
     },
      {
        name: "Okoye",
        actor: "Danai Gurira",
        description: "Dora Milaje general of Wakanda. Joins the battle against Thanos.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTjcxl6PGOWQHHQc0FsJFiPqxqUZT5THnUg&s"
      },
      {
        name: "War Machine",
        actor: "Don Cheadle",
        description: "Military officer in armored suit. Defends Wakanda.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfDDF_sT6xGxgiBwrbN84kVIhZSmKBEO1hQ&s"
      },
      {
        name: "Gamora",
        actor: "Zoe Saldana",
        description: "Daughter of Thanos who knows the Soul Stone's location.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCryFxPsEAHctdkNNRVIhrfS6XxMir4qweg&s"
      },
      {
        name: "Nebula",
        actor: "Karen Gillan",
        description: "Thanos' daughter who resists his plan.",
        image: "https://resizing.flixster.com/VO-h3pUXPRbEkHW72PoRaTxsGWY=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/572089_v9_bd.jpg"
      },
      {
        name: "Shuri",
        actor: "Letitia Wright",
        description: "Genius princess trying to remove the Mind Stone safely.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12cv0FvH2wj3CHSIVm7_umZ6NDghdPKc_Cg&s"
       },
       {
        name: "Pepper Potts",
        actor: "Gwyneth Paltrow",
        description: "Tony Stark’s wife. Wears the Rescue armor in the final battle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBV2IMJDwdoLT_KfoPQ4NmoRfgvdTB80VsQ&s"
       },
    ],
     crew: [
      {
        name: "Anthony and JoeRusso",
        role: "Directors",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49Pjx8qtSGUUTpZBLf_YmbWXj6y4Pf9RakmnTzQu_I-URx16fIGffKqigaXmgM9F6UGU&usqp=CAU"
      },
      {
        name: "Christopher Markus anf Stephen McFreely",
        role: "Writer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXgd0Uq2r3P_Z_K5gkgEpy2KgnecO9o8HMQ&s"
      },
      {
        role: "Producer",
        name: "Kevin Feige",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34cX8ybRibmy8oE8FshqpUHAk239lQUzzzA&s"
      },
      {
        role: "Music",
        name: "Alan Silvestri",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiqaWa4H65MO_dYqDq6eP-Grm0LOaVXxBkA&s"
      },
     {
        role: "Cinematography",
        name: "Trent Opaloch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSue2ZFeKEU2I4ZWebDE5V-8LJoNqZ8xdFWJ27zkSic7Aksdbpce1HZEcJgorvMDWBNQNs&usqp=CAU"
      },
      {
        role: "Editors",
        name: "Jeffrey Ford and Matthew Schmidt",
        image: "https://cdn-uploads.huggingface.co/production/uploads/noauth/vU3kUCGamfFUNt0QgNEET.jpeg"
    }
    ],
    events: [
      "European Press Tour",
      "D23 Expo Appearance"
    ],
    updates: [
      "Thor: Love and Thunder released in 2022."
    ],
    reviews: []
  }
];
