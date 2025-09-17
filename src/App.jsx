import { useState } from 'react';
import './App.css';

export default function App() {
  const initialBssm = [
    {
      id: '1-1',
      teacher: '박수진 T',
      student: ['강준영', '김가은', '김민건', '김민서', '김은호']
    },
    {
      id: '1-2',
      teacher: '박지혜 T',
      student: ['강준석', '강태은', '권기범', '김강', '김선예']
    }, 
    {
      id: '1-3',
      teacher: '허혜진 T',
      student: ['김건', '김주연', '김지아', '김지운', '김지은']
    },
    {
      id: '1-4',
      teacher: '박진향 T',
      student: ['곽영빈', '권길현', '김원우', '김태훈', '노현승']
    },
  ];

  const [dark, setDark] = useState(false);
  const [newStudent, setNewStudent] = useState({});
  const [search, setSearch] = useState("");
  const [bssm, setBssm] = useState(initialBssm);

  const [newClassId, setNewClassId] = useState("");
  const [newTeacher, setNewTeacher] = useState("");

  const [editModal, setEditModal] = useState({ open: false, classId: "", index: -1, name: "" });

  const filteredBssm = bssm.filter(item => item.teacher.includes(search));

  const handleDelete = (id) => {
    setBssm(bssm.filter(item => item.id !== id));
  };

  const handleAddStudent = (id) => {
    const name = (newStudent[id] || "").trim();
    if (!name) return;

    const targetClass = bssm.find(item => item.id === id);
    if (targetClass.student.includes(name)) {
      alert("이미 존재하는 학생입니다!");
      return;
    }

    setBssm(bssm.map(item => 
      item.id === id 
        ? { ...item, student: [...item.student, name] } 
        : item
    ));

    setNewStudent({ ...newStudent, [id]: "" });
  };

  const handleDeleteStudent = (id, index) => {
    setBssm(bssm.map(item =>
      item.id === id
        ? { ...item, student: item.student.filter((_, i) => i !== index) }
        : item
    ));
  };

  const handleSaveEdit = () => {
    const { classId, index, name } = editModal;
    if (!name.trim()) {
      alert("이름을 입력하세요.");
      return;
    }

    setBssm(bssm.map(item =>
      item.id === classId
        ? {
            ...item,
            student: item.student.map((s, i) => (i === index ? name.trim() : s))
          }
        : item
    ));

    setEditModal({ open: false, classId: "", index: -1, name: "" });
  };

  const handleAddClass = () => {
    const id = newClassId.trim();
    const teacher = newTeacher.trim();
    if (!id || !teacher) return;

    if (bssm.some(item => item.id === id)) {
      alert("이미 존재하는 반입니다!");
      return;
    }

    setBssm([...bssm, { id, teacher, student: [] }]);
    setNewClassId("");
    setNewTeacher("");
  };

  const handleReset = () => {
    setBssm(initialBssm);
    setSearch("");
    setNewStudent({});
    setNewClassId("");
    setNewTeacher("");
  };

  return (
    <div 
      className="list_div" 
      style={{
        width: '1440px',
        minHeight: '100vh',
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '20px'
      }}
    >

      <div style={{ marginBottom: "20px" }}>
        <button 
          onClick={() => setDark(!dark)}
          style={{
            padding: "10px 20px",
            backgroundColor: dark ? "darkgray" : "lightgray",
            color: dark ? "white" : "black",
            borderRadius: "8px",
            marginRight: "10px"
          }}
        >
          {dark ? "화이트모드" : "다크모드"}
        </button>

        <input 
          type="text" 
          placeholder="선생님 이름 검색" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          style={{
            height: '30px',
            borderRadius: "8px",
            border: "1px solid gray",
            width: "180px",
            marginRight: "50px"
          }}
        />

        <input
          type="text"
          placeholder="새 반 번호"
          value={newClassId}
          onChange={(e) => setNewClassId(e.target.value)}
          style={{
            height: '30px',
            borderRadius: "8px",
            border: "1px solid gray",
            width: "100px",
            marginRight: "8px"
          }}
        />

        <input
          type="text"
          placeholder="선생님 이름"
          value={newTeacher}
          onChange={(e) => setNewTeacher(e.target.value)}
          style={{
            height: '30px',
            borderRadius: "8px",
            border: "1px solid gray",
            width: "150px",
            marginRight: "8px"
          }}
        />

        <button
          onClick={handleAddClass}
          style={{
            padding: "6px 14px",
            backgroundColor: dark ? "black" : "lightgray",
            color: dark ? "white" : "black",
            borderRadius: "6px"
          }}
        >
          반 추가
        </button>
      </div>

      {filteredBssm.map(item => (
        <div 
          key={item.id} 
          style={{
            width: '500px',
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "12px",
            backgroundColor: dark ? "dimgray" : "whitesmoke",
            color: dark ? "white" : "black",
            boxShadow: "2px 2px 6px gray"
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>
            {item.id}반 - {item.teacher}
          </h3>

          <button 
            onClick={() => handleDelete(item.id)}
            style={{
              padding: "6px 12px",
              backgroundColor: dark ? "gray" : "lightgray",
              color: dark ? "white" : "black",
              border: "none",
              borderRadius: "6px",
              marginBottom: "10px"
            }}
          >
            {item.id}반 삭제
          </button>

          <ul style={{ marginTop: "10px" }}>
            {item.student.map((s, index) => (
              <li key={item.id + "-" + index} style={{ marginBottom: "5px" }}>
                {s}{" "}
                <button 
                  onClick={() => handleDeleteStudent(item.id, index)}
                  style={{
                    padding: "2px 6px",
                    backgroundColor: dark ? "black" : "lightgray",
                    color: dark ? "white" : "black",
                    borderRadius: "4px",
                    fontSize: "12px",
                    marginRight: "5px"
                  }}
                >
                  삭제
                </button>
                <button 
                  onClick={() => setEditModal({ open: true, classId: item.id, index, name: s })}
                  style={{
                    padding: "2px 6px",
                    backgroundColor: dark ? "navy" : "lightblue",
                    color: dark ? "white" : "black",
                    borderRadius: "4px",
                    fontSize: "12px"
                  }}
                >
                  수정
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "12px" }}>
            <input
              type="text"
              placeholder="추가할 학생 이름"
              value={newStudent[item.id] || ""}
              onChange={(e) => 
                setNewStudent({ ...newStudent, [item.id]: e.target.value })
              }
              style={{
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid gray",
                marginRight: "8px"
              }}
            />
            <button 
              onClick={() => handleAddStudent(item.id)}
              style={{
                padding: "6px",
                backgroundColor: dark ? "black" : "lightgray",
                color: dark ? "white" : "black",
                borderRadius: "6px",
              }}
            >
              학생 추가
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "30px" }}>
        <button 
          onClick={handleReset}
          style={{
            padding: "10px",
            backgroundColor: dark ? "darkred" : "lightcoral",
            color: "white",
            borderRadius: "8px",
          }}
        >
          새로고침
        </button>
      </div>

      {editModal.open && (
        <div 
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div 
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h3>학생 이름 수정</h3>
            <input
              type="text"
              value={editModal.name}
              onChange={(e) => setEditModal({ ...editModal, name: e.target.value })}
              style={{
                width: "90%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid gray",
                marginBottom: "15px"
              }}
            />
            <div>
              <button 
                onClick={handleSaveEdit}
                style={{
                  padding: "8px 12px",
                  marginRight: "8px",
                  backgroundColor: "lightgreen",
                  borderRadius: "6px"
                }}
              >
                저장
              </button>
              <button 
                onClick={() => setEditModal({ open: false, classId: "", index: -1, name: "" })}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "lightcoral",
                  borderRadius: "6px"
                }}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
