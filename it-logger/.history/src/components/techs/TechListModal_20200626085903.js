import React, { useState, useEffect } from "react";

const TechListModal = () => {
  const [tech, settech] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div id='tech-list-modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech) => (
              <li className='collection-item'>{tech.firstName}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Logs;
