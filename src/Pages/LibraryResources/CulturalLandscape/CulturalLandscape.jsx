import '../CulturalLandscape/CulturalLandscape.css'

const culturalLandscape = [
    {
      category: 'Place Names',
      links: [
        { title: 'DAGS - Historical Maps', url: '#' },
        { title: 'Native or Foreign Registers and Native or Foreign Testimony', url: '#' },
        { title: 'Ava Konohiki', url: '#' },
        { title: 'Papakilo', url: '#' },
        { title: 'Ulukau', url: '#' },
        { title: 'Kipuka', url: '#' },
        { title: 'Boundary Commission Testimony', url: '#' },
        { title: 'Māhele ʻĀina', url: '#' },
        { title: 'Hawaiian Language Newspapers', url: '#' },
        { title: 'Pukui and Elbert - Hawaiian Dictionary', url: '#' },
        { title: 'Pukui Elbert and Moʻokini – Place Names of Hawaiʻi', url: '#' },
        { title: 'Lloyd Sohren – Place Names of Hawaiʻi', url: '#' }
      ]
    },
    {
      category: 'Boundary Commission Testimony',
      links: [
        { title: 'Ava Konohiki', url: '#' },
        { title: 'Māhele ʻĀina', url: '#' },
        { title: 'Papakilo', url: '#' },
        { title: 'Ulukau', url: '#' },
        { title: 'Kipuka', url: '#' }
      ]
    },
    {
      category: 'Mele',
      links: [
        { title: 'Hawaiian Language Newspapers', url: '#' },
        { title: 'Pukui - ʻŌlelo Noʻeau', url: '#' },
        { title: 'Judd', url: '#' },
        { title: 'Clark - Place Names', url: '#' },
        { title: 'Huapala', url: '#' },
        { title: 'Nā Mele o Hawaiʻi Nei', url: '#' }
      ]
    },
    {
      category: 'ʻŌlelo Noʻeau',
      links: [
        { title: 'Hawaiian Language Newspapers', url: '#' },
        { title: 'Pukui - ʻŌlelo Noʻeau', url: '#' },
        { title: 'Judd', url: '#' },
        { title: 'Clark - Place Names', url: '#' }
      ]
    },
    {
      category: 'Moʻolelo',
      links: [
        { title: 'Hawaiian Language Newspapers', url: '#' },
        { title: 'Maly and Maly - Kumupono Associates', url: '#' },
        { title: '2001 Mālama Pono I ka ʻĀina', url: '#' },
        { title: 'Maly 2004 He Moʻolelo ʻAina', url: '#' }
      ]
    }
  ];
  
  export default function CulturalLandscape() {
    return (
      <div className="cultural-landscape-container">
        <h1>Cultural Landscape</h1>
        <div className="landscape-categories">
          {culturalLandscape.map((category, index) => (
            <div key={index} className="category">
              <h2>{category.category}</h2>
              <ul>
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }