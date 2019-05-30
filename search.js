const movies = [
    {
        "title": "Black Panther",
        "description": "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 15m",
        "director": [
            "Ryan Coogler"
        ],
        "reviews": [
            {
                "rating": "7.3/10",
                "provider": "IMDb"
            },
            {
                "rating": "4.6/5",
                "provider": "Facebook"
            },
            {
                "rating": "97",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "6f69864e-8d7d-4233-8a73-34067efe8c9a"
    },
    {
        "title": "Avengers: Infinity War",
        "description": "The Avengers must stop Thanos and his army from acquiring all the infinity stones. But the mad Titan is prepared to go to any lengths in order to do what he thinks is necessary.",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 40m",
        "director": [
            "Anthony Russo",
            "Joe Russo"
        ],
        "reviews": [
            {
                "rating": "8.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "85",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "68",
                "provider": "Metacritic"
            }
        ],
        "id": "f14241f1-d406-4897-a941-d37dcd980b85"
    },
    {
        "title": "Incredibles 2",
        "description": "Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen (voice of Holly Hunter) is in the spotlight, leaving Bob (voice of Craig T. Nelson) at home with Violet (voice of Sarah Vowell) and Dash (voice of Huck Milner) to navigate the day-to-day heroics of “normal” li… MORE",
        "year": "2018",
        "genre": [
            "Sci-fi",
            "Action"
        ],
        "duration": "2h 5m",
        "director": [
            "Brad Bird"
        ],
        "reviews": [
            {
                "rating": "7.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "94",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "6dc1a89c-9fd5-41f9-bac6-b7eba4a9ddea"
    },
    {
        "title": "A Star Is Born",
        "description": "Seasoned musician Jackson Maine discovers -- and falls in love with -- struggling artist Ally. She has just about given up on her dream to make it big as a singer until Jackson coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking dow… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Romance"
        ],
        "duration": "2h 14m",
        "director": [
            "Bradley Cooper"
        ],
        "reviews": [
            {
                "rating": "7.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "4.9/5",
                "provider": "Facebook"
            },
            {
                "rating": "89",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "be478296-3700-49a6-86be-77c57a57d860"
    },
    {
        "title": "A Quiet Place",
        "description": "A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.",
        "year": "2018",
        "genre": [
            "Drama",
            "Thriller"
        ],
        "duration": "1h 31m",
        "director": [
            "John Krasinski"
        ],
        "reviews": [
            {
                "rating": "7.6/10",
                "provider": "IMDb"
            },
            {
                "rating": "95",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4.6/5",
                "provider": "Facebook"
            }
        ],
        "id": "d695c774-c013-49fb-8f3f-f5df6adcaf79"
    },
    {
        "title": "Annihilation",
        "description": "Based on Jeff VanderMeer’s best-selling Southern Reach Trilogy, Annihilation stars Natalie Portman, Jennifer Jason Leigh, Gina Rodriguez, Tessa Thompson, Tuva Novotny and Oscar Isaac. It was written and directed by Alex Garland (Ex Machina, 28 Days Later).",
        "year": "2018",
        "genre": [
            "Thriller",
            "Fantasy"
        ],
        "duration": "2 hours",
        "director": [
            "Alex Garland"
        ],
        "reviews": [
            {
                "rating": "6.9/10",
                "provider": "IMDb"
            },
            {
                "rating": "88",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "96294bb5-c7fe-4151-b89a-946e17ef9b54"
    },
    {
        "title": "Mission: Impossible – Fallout",
        "description": "Ethan Hunt, along with his IMF team, sets out to stop Apostles, a group of terrorists, from detonating three plutonium cores for a simultaneous nuclear attack in different cities.",
        "year": "2018",
        "genre": [
            "Thriller",
            "Action"
        ],
        "duration": "2h 28m",
        "director": [
            "Christopher McQuarrie"
        ],
        "reviews": [
            {
                "rating": "7.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "97",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "86",
                "provider": "Metacritic"
            }
        ],
        "id": "56eef31f-d778-447c-a074-6df70b2fad0c"
    },
    {
        "title": "Aquaman",
        "description": "Once home to the most advanced civilization on Earth, the city of Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people -- and then the surface world. Standing in his way is Aquaman, Orm's half-hu… MORE",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 22m",
        "director": [
            "James Wan"
        ],
        "reviews": [
            {
                "rating": "7.1/10",
                "provider": "IMDb"
            },
            {
                "rating": "65",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "55",
                "provider": "Metacritic"
            }
        ],
        "id": "43a81596-be17-42be-a862-8f08e1bb890e"
    },
    {
        "title": "Ant-Man and the Wasp",
        "description": "Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo fi… MORE",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 5m",
        "director": [
            "Peyton Reed"
        ],
        "reviews": [
            {
                "rating": "7.1/10",
                "provider": "IMDb"
            },
            {
                "rating": "88",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "70",
                "provider": "Metacritic"
            }
        ],
        "id": "721f0788-711c-49cb-ae65-848afb74b13a"
    },
    {
        "title": "Spider-Man: Into the Spider-Verse",
        "description": "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from another dimensions to stop a threat for all realities.",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "1h 56m",
        "director": [
            "Peter Ramsey",
            "Bob Persichetti",
            "Rodney Rothman"
        ],
        "reviews": [
            {
                "rating": "8.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "97",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "87",
                "provider": "Metacritic"
            }
        ],
        "id": "c56d7be4-14ee-4af1-ab6e-02d8c9165f22"
    },
    {
        "title": "First Man",
        "description": "On the heels of their six-time Academy Award®-winning smash, La La Land, Oscar®-winning director Damien Chazelle and star Ryan Gosling reteam for Universal Pictures’ First Man, the riveting story of NASA’s mission to land a man on the moon, focusing on Neil Armstrong and the years 1961-1969. A visc… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Sci-fi"
        ],
        "duration": "2h 22m",
        "director": [
            "Damien Chazelle"
        ],
        "reviews": [
            {
                "rating": "7.4/10",
                "provider": "IMDb"
            },
            {
                "rating": "3.4/5",
                "provider": "DVD Netflix"
            },
            {
                "rating": "84",
                "provider": "Metacritic"
            }
        ],
        "id": "7fb44e08-b96d-4549-b03e-4aaca9914d3f"
    },
    {
        "title": "The Ballad of Buster Scruggs",
        "description": "An anthology of six short films that take place in 19th-century post-Civil War era during the settling of the Old West.",
        "year": "2018",
        "genre": [
            "Drama",
            "Comedy"
        ],
        "duration": "2h 13m",
        "director": [
            "Ethan Coen",
            "Joel Coen"
        ],
        "reviews": [
            {
                "rating": "7.3/10",
                "provider": "IMDb"
            },
            {
                "rating": "91",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/4",
                "provider": "Roger Ebert"
            }
        ],
        "id": "b7be5b40-ec97-48f3-aea0-b388b55de17d"
    },
    {
        "title": "Can You Ever Forgive Me?",
        "description": "Lee Israel is a frustrated, hard-drinking author who can barely afford to pay her rent or bills in 1990s New York. Desperate for money, Israel soon hatches a scheme to forge letters by famous writers and sell them to bookstores and collectors. When the dealers start to catch on, Lee recruits a dubio… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Crime"
        ],
        "duration": "1h 47m",
        "director": [
            "Marielle Heller"
        ],
        "reviews": [
            {
                "rating": "7.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "98",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "87",
                "provider": "Metacritic"
            }
        ],
        "id": "cb1dc99a-8b40-4507-a439-08d7c4220e71"
    },
    {
        "title": "Widows",
        "description": "A police shootout leaves four thieves dead during an explosive armed robbery attempt in Chicago. Their widows -- Veronica, Linda, Alice and Belle -- have nothing in common except a debt left behind by their spouses' criminal activities. Hoping to forge a future on their own terms, Veronica joins for… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Thriller"
        ],
        "duration": "2h 8m",
        "director": [
            "Steve McQueen"
        ],
        "reviews": [
            {
                "rating": "7/10",
                "provider": "IMDb"
            },
            {
                "rating": "91",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "84",
                "provider": "Metacritic"
            }
        ],
        "id": "44dc1ef8-7fc6-437f-ae0b-29f66a870ab0"
    },
    {
        "title": "Isle of Dogs",
        "description": "The mayor of Megasaki orders all the dogs to be quarantined on an island after the outbreak of canine flu. A young boy arrives on the isle to search for his dog with the help of a few exiled mongrels.",
        "year": "2018",
        "genre": [
            "Drama",
            "Fantasy"
        ],
        "duration": "1h 45m",
        "director": [
            "Wes Anderson"
        ],
        "reviews": [
            {
                "rating": "7.9/10",
                "provider": "IMDb"
            },
            {
                "rating": "90",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "1.5/4",
                "provider": "Roger Ebert"
            }
        ],
        "id": "f699842f-f707-450f-a158-49efeeabb909"
    },
    {
        "title": "Suspiria",
        "description": "Young American dancer Susie Bannion arrives in 1970s Berlin to audition for the world-renowned Helena Markos Dance Co. When she vaults to the role of lead dancer, the woman she replaces breaks down and accuses the company's female directors of witchcraft. Meanwhile, an inquisitive psychotherapist an… MORE",
        "year": "2018",
        "genre": [
            "Supernatural horror",
            "Fantasy"
        ],
        "duration": "2h 33m",
        "director": [
            "Luca Guadagnino"
        ],
        "reviews": [
            {
                "rating": "6.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "66",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "3/5",
                "provider": "Rolling Stone"
            }
        ],
        "id": "81d61530-e165-4352-8566-25b5f46da216"
    },
    {
        "title": "Venom",
        "description": "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom… MORE",
        "year": "2018",
        "genre": [
            "Thriller",
            "Sci-fi"
        ],
        "duration": "2h 20m",
        "director": [
            "Ruben Fleischer"
        ],
        "reviews": [
            {
                "rating": "6.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "29",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "35",
                "provider": "Metacritic"
            }
        ],
        "id": "2e0e0506-70b0-47f2-acb7-abe6a3c575eb"
    },
    {
        "title": "Bohemian Rhapsody",
        "description": "Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their ic… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Biography"
        ],
        "duration": "2h 13m",
        "director": [
            "Bryan Singer"
        ],
        "reviews": [
            {
                "rating": "8.1/10",
                "provider": "IMDb"
            },
            {
                "rating": "61",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "49",
                "provider": "Metacritic"
            }
        ],
        "id": "8284eaef-ea32-45f6-aa6a-7b37775f2aab"
    },
    {
        "title": "Solo: A Star Wars Story",
        "description": "Young Han Solo finds adventure when he joins forces with a gang of galactic smugglers and a 190-year-old Wookie named Chewbacca. Indebted to the gangster Dryden Vos, the crew devises a daring plan to travel to the mining planet Kessel to steal a batch of valuable coaxium. In need of a fast ship, Sol… MORE",
        "year": "2018",
        "genre": [
            "Sci-fi",
            "Action"
        ],
        "duration": "2h 15m",
        "director": [
            "Ron Howard"
        ],
        "reviews": [
            {
                "rating": "7/10",
                "provider": "IMDb"
            },
            {
                "rating": "70",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "96af830a-5a54-49fb-8545-d31fe74f5914"
    },
    {
        "title": "Halloween",
        "description": "It's been 40 years since Laurie Strode survived a vicious attack from crazed killer Michael Myers on Halloween night. Locked up in an institution, Myers manages to escape when his bus transfer goes horribly wrong. Laurie now faces a terrifying showdown when the masked madman returns to Haddonfield, … MORE",
        "year": "2018",
        "genre": [
            "Slasher",
            "Thriller"
        ],
        "duration": "1h 44m",
        "director": [
            "David Gordon Green"
        ],
        "reviews": [
            {
                "rating": "6.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "79",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "67",
                "provider": "Metacritic"
            }
        ],
        "id": "688262a6-76b6-4fda-b7d8-50b03103d841"
    },
    {
        "title": "Ocean's 8",
        "description": "After serving a prison sentence, Debbie Ocean assembles a special crew of seven women to steal a 150-million-dollar diamond necklace from the Met Gala.",
        "year": "2018",
        "genre": [
            "Thriller",
            "Crime"
        ],
        "duration": "1h 51m",
        "director": [
            "Gary Ross"
        ],
        "reviews": [
            {
                "rating": "6.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "69",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "3/4",
                "provider": "Roger Ebert"
            }
        ],
        "id": "c1fda9e9-ac82-4d77-9057-fa6dd1130abd"
    },
    {
        "title": "The Nun",
        "description": "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very … MORE",
        "year": "2018",
        "genre": [
            "Mystery",
            "Thriller"
        ],
        "duration": "1h 36m",
        "director": [
            "Corin Hardy"
        ],
        "reviews": [
            {
                "rating": "5.4/10",
                "provider": "IMDb"
            },
            {
                "rating": "3.9/5",
                "provider": "Facebook"
            },
            {
                "rating": "26",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "ae7ccebf-76e3-47a7-b358-5cb403a8b040"
    },
    {
        "title": "Ready Player One",
        "description": "After the death of James Halliday, the creator of the virtual reality world, his pre-recorded message reveals the hidden fortune, which makes Wade Watts, a teenager, embark on a quest.",
        "year": "2018",
        "genre": [
            "Thriller",
            "Sci-fi"
        ],
        "duration": "2h 19m",
        "director": [
            "Steven Spielberg"
        ],
        "reviews": [
            {
                "rating": "7.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "72",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "e359a92a-85f5-4f66-b587-3a81caf9352e"
    },
    {
        "title": "Jurassic World: Fallen Kingdom",
        "description": "Three years after the destruction of the Jurassic World theme park, Owen Grady and Claire Dearing return to the island of Isla Nublar to save the remaining dinosaurs from a volcano that's about to erupt. They soon encounter terrifying new breeds of gigantic dinosaurs, while uncovering a conspiracy t… MORE",
        "year": "2018",
        "genre": [
            "Sci-fi",
            "Action"
        ],
        "duration": "2h 10m",
        "director": [
            "J. A. Bayona"
        ],
        "reviews": [
            {
                "rating": "6.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "48",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "51",
                "provider": "Metacritic"
            }
        ],
        "id": "edfa7639-022c-4f71-a151-c32d4a88257a"
    },
    {
        "title": "Ready Player One",
        "description": "After the death of James Halliday, the creator of the virtual reality world, his pre-recorded message reveals the hidden fortune, which makes Wade Watts, a teenager, embark on a quest.",
        "year": "2018",
        "genre": [
            "Thriller",
            "Sci-fi"
        ],
        "duration": "2h 19m",
        "director": [
            "Steven Spielberg"
        ],
        "reviews": [
            {
                "rating": "7.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "72",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "8afdfb85-5ed5-4d18-9337-104f15f9a00c"
    },
    {
        "title": "The Predator",
        "description": "From the outer reaches of space to the small-town streets of suburbia, the hunt comes home. The universe's most lethal hunters are stronger, smarter and deadlier than ever before, having genetically upgraded themselves with DNA from other species. When a boy accidentally triggers their return to Ear… MORE",
        "year": "2018",
        "genre": [
            "Thriller",
            "Sci-fi"
        ],
        "duration": "1h 58m",
        "director": [
            "Shane Black"
        ],
        "reviews": [
            {
                "rating": "5.4/10",
                "provider": "IMDb"
            },
            {
                "rating": "32",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "3/4",
                "provider": "Roger Ebert"
            }
        ],
        "id": "ee930a8f-a7b4-4f4c-9410-fc1f2d87d3c0"
    },
    {
        "title": "Rampage",
        "description": "Primatologist Davis Okoye teams up with a geneticist to prevent three giant mutated animals from wreaking havoc in Chicago that includes his dear friend, an albino gorilla named George.",
        "year": "2018",
        "genre": [
            "Sci-fi",
            "Action"
        ],
        "duration": "1h 55m",
        "director": [
            "Brad Peyton"
        ],
        "reviews": [
            {
                "rating": "6.1/10",
                "provider": "IMDb"
            },
            {
                "rating": "52",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "45",
                "provider": "Metacritic"
            }
        ],
        "id": "1c5e6f64-b964-4720-bb13-23159f323fa8"
    },
    {
        "title": "Bumblebee",
        "description": "On the run in the year of 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.",
        "year": "2018",
        "genre": [
            "Sci-fi",
            "Action"
        ],
        "duration": "1h 54m",
        "director": [
            "Travis Knight"
        ],
        "reviews": [
            {
                "rating": "6.9/10",
                "provider": "IMDb"
            },
            {
                "rating": "92",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "66",
                "provider": "Metacritic"
            }
        ],
        "id": "c32da401-d5bc-4d9e-b08d-7036d5719133"
    },
    {
        "title": "Sorry to Bother You",
        "description": "In an alternate reality of present-day Oakland, Calif., telemarketer Cassius Green finds himself in a macabre universe after he discovers a magical key that leads to material glory. As Green's career begins to take off, his friends and co-workers organize a protest against corporate oppression. Cass… MORE",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "1h 52m",
        "director": [
            "Boots Riley"
        ],
        "reviews": [
            {
                "rating": "7/10",
                "provider": "IMDb"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "80",
                "provider": "Metacritic"
            }
        ],
        "id": "e2681454-2799-4564-801f-b06245fcb646"
    },
    {
        "title": "Overlord",
        "description": "On the eve of D-Day, American paratroopers drop behind enemy lines to penetrate the walls of a fortified church and destroy a radio transmitter. As the soldiers approach their target, they soon begin to realize that there's more going on in the Nazi-occupied village than a simple military operation.… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Thriller"
        ],
        "duration": "1h 48m",
        "director": [
            "Julius Avery"
        ],
        "reviews": [
            {
                "rating": "6.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "81",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "60",
                "provider": "Metacritic"
            }
        ],
        "id": "6e224982-30a4-4ecd-aacc-bb059faa3b42"
    },
    {
        "title": "Love, Simon",
        "description": "Everyone deserves a great love story, but for 17-year-old Simon Spier, it's a little more complicated. He hasn't told his family or friends that he's gay, and he doesn't know the identity of the anonymous classmate that he's fallen for online. Resolving both issues proves hilarious, terrifying and l… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Comedy-drama"
        ],
        "duration": "1h 50m",
        "director": [
            "Greg Berlanti"
        ],
        "reviews": [
            {
                "rating": "7.6/10",
                "provider": "IMDb"
            },
            {
                "rating": "91",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "72",
                "provider": "Metacritic"
            }
        ],
        "id": "f58c314a-603f-45a5-aca1-63a1e4667471"
    },
    {
        "title": "Vice",
        "description": "Governor George W Bush of Texas picks Dick Cheney, the CEO of Halliburton Co, to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defence secretary. When Bush w… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Comedy-drama"
        ],
        "duration": "2h 13m",
        "director": [
            "Adam McKay"
        ],
        "reviews": [
            {
                "rating": "7.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "67",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "61",
                "provider": "Metacritic"
            }
        ],
        "id": "a9609639-1131-4608-b649-3b63e214f3f3"
    },
    {
        "title": "Crazy Rich Asians",
        "description": "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with je… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Comedy-drama"
        ],
        "duration": "2h 1m",
        "director": [
            "Jon M. Chu"
        ],
        "reviews": [
            {
                "rating": "7/10",
                "provider": "IMDb"
            },
            {
                "rating": "3.8/5",
                "provider": "Goodreads"
            },
            {
                "rating": "91",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "a8654818-b71f-489e-90cf-a2e73c863d39"
    },
    {
        "title": "Fantastic Beasts: The Crimes of Grindelwald",
        "description": "The second installment of the \"Fantastic Beasts\" series featuring the adventures of Magizoologist Newt Scamander.",
        "year": "2018",
        "genre": [
            "Drama",
            "Fantasy"
        ],
        "duration": "2h 13m",
        "director": [
            "David Yates"
        ],
        "reviews": [
            {
                "rating": "6.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "37",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "52",
                "provider": "Metacritic"
            }
        ],
        "id": "336a0d41-dee1-4f68-96e8-71e6c51fd98b"
    },
    {
        "title": "Mamma Mia! Here We Go Again",
        "description": "Sophie Sheridan learns more about her mother Donna's history on the island of Kalokairi with her three possible fathers as she reopens the family hotel.",
        "year": "2018",
        "genre": [
            "Musical",
            "Comedy"
        ],
        "duration": "1h 54m",
        "director": [
            "Ol Parker"
        ],
        "reviews": [
            {
                "rating": "6.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "81",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "60",
                "provider": "Metacritic"
            }
        ],
        "id": "a5611ad4-4125-44e0-a1f2-6c295f4892b0"
    },
    {
        "title": "Blockers",
        "description": "Lisa, Mitchell and Hunter become good friends after seeing the friendship of their children. However, the parents try hard to stop their daughters from losing their virginity on prom night.",
        "year": "2018",
        "genre": [
            "Comedy",
            "Sex comedy"
        ],
        "duration": "1h 42m",
        "director": [
            "Kay Cannon"
        ],
        "reviews": [
            {
                "rating": "6.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "83",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "69",
                "provider": "Metacritic"
            }
        ],
        "id": "349621c0-f882-4041-83ad-3c9d1ffe7ea6"
    },
    {
        "title": "Roma",
        "description": "Cleo is one of two domestic workers who help Antonio and Sofía take care of their four children in 1970s Mexico City. Complications soon arise when Antonio suddenly runs away with his mistress and Cleo finds out that she's pregnant. When Sofía decides to take the kids on vacation, she invites Cleo f… MORE",
        "year": "2018",
        "genre": [
            "Drama"
        ],
        "duration": "2h 15m",
        "director": [
            "Alfonso Cuarón"
        ],
        "reviews": [
            {
                "rating": "7.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "96",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "96",
                "provider": "Metacritic"
            }
        ],
        "id": "f2b1b0d5-1cbe-41d3-aee2-49723695027a"
    },
    {
        "title": "Unsane",
        "description": "Sawyer Valentini relocates from Boston to Pennsylvania to escape from the man who's been stalking her for the last two years. While consulting with a therapist, Valentini unwittingly signs in for a voluntary 24-hour commitment to the Highland Creek Behavioral Center. Her stay at the facility soon ge… MORE",
        "year": "2018",
        "genre": [
            "Thriller",
            "Horror"
        ],
        "duration": "1h 38m",
        "director": [
            "Steven Soderbergh"
        ],
        "reviews": [
            {
                "rating": "6.4/10",
                "provider": "IMDb"
            },
            {
                "rating": "80",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "63",
                "provider": "Metacritic"
            }
        ],
        "id": "bb2cbd90-4ace-4e7a-8250-fd3e5abadec7"
    },
    {
        "title": "96",
        "description": "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
        "year": "2018",
        "genre": [
            "Drama",
            "Romance"
        ],
        "duration": "2h 38m",
        "director": [
            "C. Prem Kumar"
        ],
        "reviews": [
            {
                "rating": "4/5",
                "provider": "India Today"
            },
            {
                "rating": "8.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "5/5",
                "provider": "News18.com"
            }
        ],
        "id": "d580564c-02ba-4d59-8374-f4df99a34399"
    },
    {
        "title": "Hotel Transylvania 3: Summer Vacation",
        "description": "On a luxury monster cruise ship Dracula meets Ericka, the captain of the ship, who belongs to the family of Van Helsing that wants to destroy the entire monster race.",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Adventure"
        ],
        "duration": "1h 37m",
        "director": [
            "Genndy Tartakovsky"
        ],
        "reviews": [
            {
                "rating": "6.3/10",
                "provider": "IMDb"
            },
            {
                "rating": "61",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "3/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "d4722e29-63e6-4b58-8a1f-0d8285e6ce56"
    },
    {
        "title": "The Old Man & the Gun",
        "description": "At the age of 70, Forrest Tucker makes an audacious escape from San Quentin, conducting an unprecedented string of heists that confound authorities and enchant the public. Wrapped up in the pursuit are detective John Hunt, who becomes captivated with Forrest's commitment to his craft, and a woman wh… MORE",
        "year": "2018",
        "genre": [
            "Drama",
            "Crime"
        ],
        "duration": "1h 34m",
        "director": [
            "David Lowery"
        ],
        "reviews": [
            {
                "rating": "6.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "890c4075-a0fb-431f-9e90-057b2d4f52a1"
    },
    {
        "title": "A Wrinkle in Time",
        "description": "Meg Murry and her little brother, Charles Wallace, have been without their scientist father, Mr. Murry, for five years, ever since he discovered a new planet and used the concept known as a tesseract to travel there. Joined by Meg's classmate Calvin O'Keefe and guided by the three mysterious astral … MORE",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "1h 50m",
        "director": [
            "Ava DuVernay"
        ],
        "reviews": [
            {
                "rating": "42",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "3/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "6d82008e-9d6a-494f-a17a-011eda339ada"
    },
    {
        "title": "12 Strong",
        "description": "Captain Mitch Nelson leads an elite team and embarks on a mission to take down an Afghan warlord. However, they find themselves in trouble when they are outnumbered by the unsparing enemies.",
        "year": "2018",
        "genre": [
            "Drama",
            "Action"
        ],
        "duration": "2h 11m",
        "director": [
            "Nicolai Fuglsig"
        ],
        "reviews": [
            {
                "rating": "6.6/10",
                "provider": "IMDb"
            },
            {
                "rating": "51",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "54",
                "provider": "Metacritic"
            }
        ],
        "id": "61c98a75-bb3e-4e26-a3f9-4480e522c2c2"
    },
    {
        "title": "The Other Side of the Wind",
        "description": "After years of exile in Europe, a maverick director returns to Hollywood to finish his comeback movie, `The Other Side of the Wind'.",
        "year": "2018",
        "genre": [
            "Drama",
            "Satire"
        ],
        "duration": "2h 2m",
        "director": [
            "Orson Welles"
        ],
        "reviews": [
            {
                "rating": "6.9/10",
                "provider": "IMDb"
            },
            {
                "rating": "82",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/4",
                "provider": "Roger Ebert"
            }
        ],
        "id": "62738746-2084-433b-a2d3-d8a141f8369a"
    },
    {
        "title": "The Grinch",
        "description": "A grumpy Grinch plots to ruin Christmas for the village of Whoville.",
        "year": "2018",
        "genre": [
            "Fantasy",
            "Musical"
        ],
        "duration": "1h 32m",
        "director": [
            "Yarrow Cheney",
            "Scott Mosier"
        ],
        "reviews": [
            {
                "rating": "6.3/10",
                "provider": "IMDb"
            },
            {
                "rating": "59",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "3/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "38c640d9-e158-46ea-af77-ca69e25ea955"
    },
    {
        "title": "Glass",
        "description": "M. Night Shyamalan brings together the narratives of two of his standout originals—2000’s Unbreakable, from Touchstone, and 2016’s Split, from Universal—in one explosive, all-new comic-book thriller: Glass. From Unbreakable, Bruce Willis returns as David Dunn as does Samuel L. Jackson as Elijah Pr… MORE",
        "year": "2019",
        "genre": [
            "Drama",
            "Fantasy"
        ],
        "duration": "2h 9m",
        "director": [
            "M. Night Shyamalan"
        ],
        "reviews": [
            {
                "rating": "6.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "43",
                "provider": "Metacritic"
            },
            {
                "rating": "38",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "23c433cb-2996-44b0-b26c-c014ae9cdcdc"
    },
    {
        "title": "The Kid Who Would Be King",
        "description": "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of s… MORE",
        "year": "2019",
        "genre": [
            "Fantasy",
            "Action"
        ],
        "duration": "2 hours",
        "director": [
            "Joe Cornish"
        ],
        "reviews": [
            {
                "rating": "6/10",
                "provider": "IMDb"
            },
            {
                "rating": "90",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4/5",
                "provider": "Common Sense Media"
            }
        ],
        "id": "1da04892-f562-43f2-ba77-75b568b27715"
    },
    {
        "title": "Miss Bala",
        "description": "Young Gloria seeks help from the police when cartel hit men kidnap her friend from a nightclub in Mexico. She soon finds herself in big trouble when a corrupt cop hands her over to the same goons who shot up the place. Their gang leader, Lino, decides to use Gloria for his dirty work to avoid detect… MORE",
        "year": "2019",
        "genre": [
            "Drama",
            "Thriller"
        ],
        "duration": "1h 44m",
        "director": [
            "Catherine Hardwicke"
        ],
        "reviews": [
            {
                "rating": "5.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "22",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "41",
                "provider": "Metacritic"
            }
        ],
        "id": "c3783b27-08b9-413b-9d88-3d43eec7ace4"
    },
    {
        "title": "The Lego Movie 2: The Second Part",
        "description": "The citizens of Bricksburg face a dangerous new threat when LEGO DUPLO invaders from outer space start to wreck everything in their path. The battle to defeat the enemy and restore harmony to the LEGO universe takes Emmet, Lucy, Batman and the rest of their friends to faraway, unexplored worlds that… MORE",
        "year": "2019",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "1h 47m",
        "director": [
            "Mike Mitchell"
        ],
        "reviews": [
            {
                "rating": "6.8/10",
                "provider": "IMDb"
            },
            {
                "rating": "85",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "65",
                "provider": "Metacritic"
            }
        ],
        "id": "54227fc0-099a-43fd-a65e-d880d463e440"
    },
    {
        "title": "The Fate of the Furious",
        "description": "Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to stop Cipher and save the man who brought them together as a family.",
        "year": "2017",
        "genre": [
            "Crime",
            "Thriller"
        ],
        "duration": "2h 29m",
        "director": [
            "F. Gary Gray"
        ],
        "reviews": [
            {
                "rating": "6.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "56",
                "provider": "Metacritic"
            },
            {
                "rating": "67",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "62a5eae9-ff34-4ecc-9b6a-92bd1c2842cb"
    },
    {
        "title": "Dunkirk",
        "description": "During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.",
        "year": "2017",
        "genre": [
            "Drama",
            "Mystery"
        ],
        "duration": "1h 46m",
        "director": [
            "Christopher Nolan"
        ],
        "reviews": [
            {
                "rating": "7.9/10",
                "provider": "IMDb"
            },
            {
                "rating": "94",
                "provider": "Metacritic"
            },
            {
                "rating": "92",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "da40525e-6cda-4ee3-8698-5952c3d247d9"
    },
    {
        "title": "Wonder Woman",
        "description": "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.",
        "year": "2017",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 29m",
        "director": [
            "Patty Jenkins"
        ],
        "reviews": [
            {
                "rating": "7.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "4.6/5",
                "provider": "Facebook"
            }
        ],
        "id": "0ba559aa-8243-492c-9b3b-e8d291c0364d"
    },
    {
        "title": "Star Wars: The Last Jedi",
        "description": "Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.",
        "year": "2017",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 33m",
        "director": [
            "Rian Johnson"
        ],
        "reviews": [
            {
                "rating": "7.2/10",
                "provider": "IMDb"
            },
            {
                "rating": "85",
                "provider": "Metacritic"
            },
            {
                "rating": "91",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "1378cfa9-f7f0-4ab9-b840-9edaabc49978"
    },
    {
        "title": "Thor: Ragnarok",
        "description": "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
        "year": "2017",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 10m",
        "director": [
            "Taika Waititi"
        ],
        "reviews": [
            {
                "rating": "7.9/10",
                "provider": "IMDb"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "74",
                "provider": "Metacritic"
            }
        ],
        "id": "fe370fa1-a7b2-44e3-b274-4fa9d212b3a3"
    },
    {
        "title": "Blade Runner 2049",
        "description": "K, an officer with the Los Angeles Police Department, unearths a secret that could cause chaos. He goes in search of another blade runner who has been missing for three decades.",
        "year": "2017",
        "genre": [
            "Fantasy",
            "Mystery"
        ],
        "duration": "2h 44m",
        "director": [
            "Denis Villeneuve"
        ],
        "reviews": [
            {
                "rating": "8/10",
                "provider": "IMDb"
            },
            {
                "rating": "87",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "81",
                "provider": "Metacritic"
            }
        ],
        "id": "4361b560-b3ba-4045-bf7d-8db34f62bde8"
    },
    {
        "title": "Spider-Man: Homecoming",
        "description": "Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        "year": "2017",
        "genre": [
            "Fantasy",
            "Sci-fi"
        ],
        "duration": "2h 13m",
        "director": [
            "Jon Watts"
        ],
        "reviews": [
            {
                "rating": "7.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "73",
                "provider": "Metacritic"
            },
            {
                "rating": "92",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "17759e57-c647-41ab-b3d6-bb3197d44a91"
    },
    {
        "title": "Logan",
        "description": "Logan comes out of retirement to escort a young mutant named Laura to a safe place. He meets with other mutants, who run from an evil corporation that has been experimenting with them, along the way.",
        "year": "2017",
        "genre": [
            "Drama",
            "Sci-fi"
        ],
        "duration": "2h 21m",
        "director": [
            "James Mangold"
        ],
        "reviews": [
            {
                "rating": "8.1/10",
                "provider": "IMDb"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "77",
                "provider": "Metacritic"
            }
        ],
        "id": "a344540f-aa2d-4e48-921c-9a651454686f"
    },
    {
        "title": "Get Out",
        "description": "Chris, an African-American man, decides to visit his Caucasian girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead.",
        "year": "2017",
        "genre": [
            "Mystery",
            "Thriller"
        ],
        "duration": "1h 44m",
        "director": [
            "Jordan Peele"
        ],
        "reviews": [
            {
                "rating": "7.7/10",
                "provider": "IMDb"
            },
            {
                "rating": "98",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "84",
                "provider": "Metacritic"
            }
        ],
        "id": "df4fd0bd-41c0-43bf-908c-bf99427a0424"
    },
    {
        "title": "War for the Planet of the Apes",
        "description": "When a rogue army of humans kills Caesar's wife and son, he sets out to exact revenge. But his quest for retribution reveals his darker instincts even as he makes a startling discovery.",
        "year": "2017",
        "genre": [
            "Sci-fi",
            "Thriller"
        ],
        "duration": "2h 20m",
        "director": [
            "Matt Reeves"
        ],
        "reviews": [
            {
                "rating": "7.5/10",
                "provider": "IMDb"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            },
            {
                "rating": "82",
                "provider": "Metacritic"
            }
        ],
        "id": "aee34635-0644-4e47-aba5-ba9f26c269f1"
    },
    {
        "title": "Baby Driver",
        "description": "Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. The plan goes awry when their arms dealers turn out to be undercover officers.",
        "year": "2017",
        "genre": [
            "Drama",
            "Crime"
        ],
        "duration": "1h 53m",
        "director": [
            "Edgar Wright"
        ],
        "reviews": [
            {
                "rating": "7.6/10",
                "provider": "IMDb"
            },
            {
                "rating": "86",
                "provider": "Metacritic"
            },
            {
                "rating": "93",
                "provider": "Rotten Tomatoes"
            }
        ],
        "id": "d5aae667-5353-44c5-ad38-f0611a1d3bf9"
    }
]


function filter(list, key){
    return list.filter(movie => {
        return movie[Object.keys(key)[0]] instanceof Array ?
        movie[Object.keys(key)[0]].indexOf(key[Object.keys(key)[0]].toString()) > -1:
        movie[Object.keys(key)[0]] === key[Object.keys(key)[0]].toString()
    });
}

function keysearch(list, key){
    return list.filter(movie => 
        movie.title.toUpperCase().indexOf(key.toUpperCase()) > -1 ||
        movie.description.toUpperCase().indexOf(key.toUpperCase()) > -1 ||
        movie.year === key ||
        movie.genre.filter(genre => genre.toUpperCase() === key.toUpperCase()).length > 0 ||
        movie.director.filter(director => director.toUpperCase() === key.toUpperCase()).length > 0
    )
}

function search(key, attrfilter){
    console.log(key, attrfilter)
    var filtered = movies;
    if(attrfilter === undefined){
        return keysearch(filtered, key)
    }
    else {
        console.log("enter 1")
        if(key !== undefined){
            filtered = keysearch(filtered, key)
        }
        if(attrfilter instanceof Array){
            attrfilter.forEach(element => {
                filtered = filter(filtered, element)
            });
            return filtered;
        }
        else{
            return filter(filtered, attrfilter)
        }
    }
    return [];
}

module.exports = {search, movies};