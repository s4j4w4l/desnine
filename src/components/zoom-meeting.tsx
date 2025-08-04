"use client";

interface Participant {
  id: string;
  name: string;
  avatarColor: string;
  faceImage: string;
}

export function ZoomMeeting() {
  const participants: Participant[] = [
    { 
      id: "1", 
      name: "Alex Chen", 
      avatarColor: "from-blue-500 to-purple-600",
      faceImage: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    { 
      id: "2", 
      name: "Sarah Johnson", 
      avatarColor: "from-pink-500 to-red-500",
      faceImage: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    { 
      id: "3", 
      name: "Mike Rodriguez", 
      avatarColor: "from-green-500 to-teal-500",
      faceImage: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      id: "4",
      name: "Emma Wilson",
      avatarColor: "from-orange-500 to-yellow-500",
      faceImage: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-secondary/10 border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg font-semibold">Team Meeting</h2>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="relative aspect-video bg-secondary/20 rounded-lg border-2 border-border overflow-hidden"
              >
                <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-8 h-8 bg-gradient-to-br ${participant.avatarColor} rounded-full mx-auto flex items-center justify-center shadow-lg`}>
                      <img src={participant.faceImage} alt={participant.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}