import React, { useState, useEffect } from 'react';
import { Sun, Moon, Calendar, Clock, MapPin, User } from 'lucide-react';

const scheduleData = {
  "grade_section": 3,
  "sections": [
    {
      "section_number": 1,
      "schedule": [
        {
          "day": "Saturday",
          "sessions": [
            {
              "session_number": 1,
              "time": "08:00 AM - 09:00 AM",
              "subject": "Computer Organization",
              "place": "Lab 1",
              "instructor": "Eng. Al-Banna"
            },
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Operating Systems",
              "place": "Lab 2",
              "instructor": "Eng. Sama"
            }
          ]
        },
        {
          "day": "Sunday",
          "sessions": [
            {
              "session_number": 1,
              "time": "08:00 AM - 09:00 AM",
              "subject": "Artificial Intelligence",
              "place": "Lab 1",
              "instructor": "Eng. Omnyea"
            },
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Algorithms Analysis and Design",
              "place": "Lab 1",
              "instructor": "Eng. Sama"
            }
          ]
        },
        {
          "day": "Monday",
          "sessions": [
            {
              "session_number": 5,
              "time": "12:00 PM - 1:00 PM",
              "subject": "Digital Signal Processing",
              "place": "Lab 1",
              "instructor": "Eng. Sama"
            },
            {
              "session_number": 7,
              "time": "02:00 PM - 03:00 PM",
              "subject": "Network Routing",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            },
            {
              "session_number": 8,
              "time": "03:00 PM - 04:00 PM",
              "subject": "Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            }
          ]
        }
      ]
    },
    {
      "section_number": 2,
      "schedule": [
        {
          "day": "Saturday",
          "sessions": [
            {
              "session_number": 1,
              "time": "08:00 AM - 09:00 AM",
              "subject": "Operating Systems",
              "place": "Lab 2",
              "instructor": "Eng. Sama"
            },
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Computer Organization",
              "place": "Lab 1",
              "instructor": "Eng. Al-Banna"
            }
          ]
        },
        {
          "day": "Sunday",
          "sessions": [
            {
              "session_number": 1,
              "time": "08:00 AM - 09:00 AM",
              "subject": "Network Routing and Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            },
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Network Routing and Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            }
          ]
        },
        {
          "day": "Monday",
          "sessions": [
            {
              "session_number": 6,
              "time": "01:00 PM - 02:00 PM",
              "subject": "Artificial Intelligence",
              "place": "Lab 1",
              "instructor": "Eng. Omnyea"
            },
            {
              "session_number": 7,
              "time": "02:00 PM - 03:00 PM",
              "subject": "Algorithms Analysis and Design",
              "place": "Lab 1",
              "instructor": "Eng. Sama"
            },
            {
              "session_number": 9,
              "time": "04:00 PM - 05:00 PM",
              "subject": "Digital Signal Processing",
              "place": "Lab 1",
              "instructor": "Eng. Sama"
            }
          ]
        }
      ]
    },
    {
      "section_number": 3,
      "schedule": [
        {
          "day": "Tuesday",
          "sessions": [
            {
              "session_number": 1,
              "time": "08:00 AM - 09:00 AM",
              "subject": "Operating Systems",
              "place": "Lab 2",
              "instructor": "Eng. Sama"
            },
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Digital Signal Processing",
              "place": "Lab 2",
              "instructor": "Eng. Sama"
            }
          ]
        },
        {
          "day": "Wednesday",
          "sessions": [
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Computer Organization",
              "place": "Lab 2",
              "instructor": "Eng. Al-Banna"
            },
            {
              "session_number": 3,
              "time": "10:00 AM - 11:00 AM",
              "subject": "Artificial Intelligence",
              "place": "Lab 1",
              "instructor": "Eng. Omnyea"
            }
          ]
        },
        {
          "day": "Thursday",
          "sessions": [
            {
              "session_number": 1,
              "time": "08:00 AM - 09:00 AM",
              "subject": "Network Routing and Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            },
            {
              "session_number": 2,
              "time": "09:00 AM - 10:00 AM",
              "subject": "Network Routing and Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            },
            {
              "session_number": 3,
              "time": "10:00 AM - 11:00 AM",
              "subject": "Algorithms Analysis and Design",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            }
          ]
        }
      ]
    },
    {
      "section_number": 4,
      "schedule": [
        {
          "day": "Tuesday",
          "sessions": [
            {
              "session_number": 8,
              "time": "03:00 PM - 04:00 PM",
              "subject": "Operating Systems",
              "place": "Lab 1",
              "instructor": "Eng. Sama"
            },
            {
              "session_number": 9,
              "time": "04:00 PM - 05:00 PM",
              "subject": "Digital Signal Processing",
              "place": "Lab 1",
              "instructor": "Eng. Sama"
            }
          ]
        },
        {
          "day": "Wednesday",
          "sessions": [
            {
              "session_number": 3,
              "time": "10:00 AM - 11:00 AM",
              "subject": "Computer Organization",
              "place": "Lab 2",
              "instructor": "Eng. Al-Banna"
            },
            {
              "session_number": 4,
              "time": "11:00 AM - 12:00 PM",
              "subject": "Algorithms Analysis and Design",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            }
          ]
        },
        {
          "day": "Thursday",
          "sessions": [
            {
              "session_number": 6,
              "time": "01:00 PM - 02:00 PM",
              "subject": "Artificial Intelligence",
              "place": "Lab 1",
              "instructor": "Eng. Omnyea"
            },
            {
              "session_number": 7,
              "time": "02:00 PM - 03:00 PM",
              "subject": "Network Routing and Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            },
            {
              "session_number": 8,
              "time": "03:00 PM - 04:00 PM",
              "subject": "Network Routing and Switching-Lab",
              "place": "Lab 2",
              "instructor": "Eng. Amany"
            }
          ]
        }
      ]
    }
  ]
};

const ScheduleSelector = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const [selectedDay, setSelectedDay] = useState("Saturday");
  const [darkMode, setDarkMode] = useState(false);

  const handleSectionChange = (e) => {
    const newSection = parseInt(e.target.value);
    setSelectedSection(newSection);
    // Set the selected day to the first available day for the new section
    const firstDayOfNewSection = scheduleData.sections.find(s => s.section_number === newSection).schedule[0].day;
    setSelectedDay(firstDayOfNewSection);
  };

  const handleDayChange = (day) => setSelectedDay(day);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const getAvailableDays = () => {
    const section = scheduleData.sections.find(s => s.section_number === selectedSection);
    return section.schedule.map(s => s.day);
  };

  const renderSchedule = () => {
    const section = scheduleData.sections.find(s => s.section_number === selectedSection);
    const daySchedule = section.schedule.find(d => d.day === selectedDay);

    if (!daySchedule) {
      return <p className={`text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>No sessions scheduled for this day.</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {daySchedule.sessions.map((session, index) => (
          <div key={index} className={`rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className={`px-6 py-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'}`}>
              <div className="font-bold text-xl mb-2 text-white">{session.subject}</div>
              <div className="flex items-center text-blue-200">
                <Clock className="w-4 h-4 mr-2" />
                <p>{session.time}</p>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className={`flex items-center mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <MapPin className="w-4 h-4 mr-2" />
                <span>{session.place}</span>
              </p>
              <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <User className="w-4 h-4 mr-2" />
                <span>{session.instructor}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Student Schedule</h1>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-blue-600 text-white'}`}
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        <div className="mb-6">
          <select 
            onChange={handleSectionChange} 
            value={selectedSection}
            className={`w-full p-2 border rounded mb-4 transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}
          >
            {scheduleData.sections.map((section) => (
              <option key={section.section_number} value={section.section_number}>
                Section {section.section_number}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {getAvailableDays().map((day) => (
              <button
                key={day}
                onClick={() => handleDayChange(day)}
                className={`px-4 py-2 rounded transition duration-300 flex items-center ${
                  selectedDay === day 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                    : (darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {day}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-8 animate-fade-in-up">
          {renderSchedule()}
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelector;