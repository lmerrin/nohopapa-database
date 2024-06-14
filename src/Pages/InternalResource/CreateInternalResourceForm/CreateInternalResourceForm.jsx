import "./CreateInternalResourceForm.css";
import MultiSelectCheckBox from "../../../Components/MultiSelectCheckBox/MultiSelectCheckBox";
import { useState, useEffect } from "react";
import api from "../../../api";

export default function CreateInternalResourceForm() {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [islands, setIslands] = useState([]);
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [selectedMokus, setSelectedMokus] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const fetchedAuthors = await api.fetchAuthors();
        setAuthors(fetchedAuthors);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchIslands = async () => {
      try {
        const fetchedIslands = await api.fetchIslands();
        setIslands(fetchedIslands);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuthors();
    fetchIslands();
  }, []);

  return (
    <form>
      <label>
        Title <input type="text" name="title" placeholder="Report Title" />
      </label>
      <label>
        Company
        <input type="text" name="company" placeholder="Company" />
      </label>

      <label>
        Year <input type="text" />
      </label>

      <label>
        URL
        <input type="url" name="url" placeholder="https://" />
      </label>

      <label>
        Author
        <MultiSelectCheckBox
          items={authors}
          displayKey={"name"}
          onItemChecked={(author) => {
            const authorsSet = new Set([...selectedAuthors]);
            authorsSet.add(author);
            setSelectedAuthors([...authorsSet]);
          }}
          onItemUnchecked={(author) => {
            const authorsSet = new Set([...selectedAuthors]);
            authorsSet.delete(author);
            setSelectedAuthors([...authorsSet]);
          }}
        />
      </label>

      <p>
        {selectedAuthors
          .map((author) => {
            return author.name;
          })
          .join(", ")}
      </p>

      <label>
        Islands
        <select
          name="island"
          onChange={(e) => {
            const island = JSON.parse(e.target.value);
            console.log(island);
            if (selectedMokus.length) {
                setSelectedMokus([])
            }
            setSelectedIsland(island);
          }}
          required
        >
          <option value="">Select Island</option>
          {islands.map((island) => (
            <option key={island.id} value={JSON.stringify(island)}>
              {island.name}
            </option>
          ))}
        </select>
      </label>

     {selectedIsland && <label>
        Moku
        <MultiSelectCheckBox
          items={selectedIsland.moku}
          displayKey={"name"}
          onItemChecked={(moku) => {
            const mokuSet = new Set([...selectedMokus]);
            mokuSet.add(moku);
            setSelectedMokus([...mokuSet]);
          }}
          onItemUnchecked={(moku) => {
            const mokuSet = new Set([...selectedMokus]);
            mokuSet.delete(moku);
            setSelectedMokus([...mokuSet]);
          }}
        />
      </label>}

      <p>
        {selectedMokus
          .map((moku) => {
            return moku.name;
          })
          .join(", ")}
      </p>

      {selectedMokus.length && <label>
        Ahupuaʻa
        <MultiSelectCheckBox
          items={selectedIsland.moku}
          displayKey={"name"}
          onItemChecked={(moku) => {
            const mokuSet = new Set([...selectedMokus]);
            mokuSet.add(moku);
            setSelectedMokus([...mokuSet]);
          }}
          onItemUnchecked={(moku) => {
            const mokuSet = new Set([...selectedMokus]);
            mokuSet.delete(moku);
            setSelectedMokus([...mokuSet]);
          }}
        />
      </label>}

      <button>Submit</button>
    </form>
  );
}
