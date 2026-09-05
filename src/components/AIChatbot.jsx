import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, Send } from 'lucide-react';

const botReplies = {
  admission:
    'Admissions for AY 2027-2028 are open from Nursery to Class XI. The process includes online application, counselling, campus visit, interaction/assessment, document verification and fee payment. Would you like me to start an application for you?',
  fee:
    'Fees vary by class and whether the student is a day scholar or boarder. You can use our Fee Estimator on the Admissions page for an indicative amount. Scholarships and sibling discounts are available. Final fee structure is shared during personal counselling.',
  hostel:
    'Yes, we offer separate, well-supervised hostels for boys and girls on our 10-acres campus. Facilities include hygienic meals, 24×7 medical support, laundry, study halls and recreational areas. Hostel attendance and visitor management are fully digital.',
  transport:
    'Safe and GPS-tracked transport is available on major routes. Parents can track the bus live through the Parent App. Routes and pickup points are optimized every year based on demand.',
  facilities:
    'Our campus features smart classrooms, modern science labs, a over 2.5-acres sports complex, AC auditorium, digital library, robotics lab, health centre with in-house doctor, and high-security CCTV coverage.',
  default:
    'Thank you for your question. For detailed information, I recommend speaking with our admission counsellor or booking a campus visit. You can also call us at +91 70777 75311 or WhatsApp +91 70777 75310.'
};

export default function AIChatbot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! I’m the Cohen AI Assistant. How can I help you today?',
      chips: true
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    if (!textToSend) setInputVal('');

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = text.toLowerCase();
      let reply = botReplies.default;
      if (lower.includes('admission') || lower.includes('apply') || lower.includes('requirement'))
        reply = botReplies.admission;
      else if (lower.includes('fee') || lower.includes('cost') || lower.includes('price'))
        reply = botReplies.fee;
      else if (lower.includes('hostel') || lower.includes('boarding') || lower.includes('residential'))
        reply = botReplies.hostel;
      else if (lower.includes('transport') || lower.includes('bus') || lower.includes('pickup'))
        reply = botReplies.transport;
      else if (
        lower.includes('facilit') ||
        lower.includes('campus') ||
        lower.includes('lab') ||
        lower.includes('sport')
      )
        reply = botReplies.facilities;

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating trigger buttons */}
      <div id="chatbot-btn" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Toggle AI Chatbot"
          title="Cohen AI Assistant"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Bot className="w-7 h-7" />}
        </button>
      </div>

      {/* Chatbot window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] chatbot-window rounded-3xl overflow-hidden flex flex-col bg-white border border-cream-200 shadow-2xl"
        >
          <div className="bg-navy-900 px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-navy-900" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Cohen AI Assistant</p>
              <p className="text-gold-400 text-xs">Online • Ask anything about admissions, fees, hostel…</p>
            </div>
          </div>

          <div ref={chatMessagesRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-gold-400" />
                  </div>
                )}
                <div
                  className={`${
                    msg.sender === 'user'
                      ? 'bg-navy-900 text-white rounded-2xl rounded-tr-md'
                      : 'bg-white rounded-2xl rounded-tl-md text-navy-800 shadow-sm'
                  } px-4 py-3 max-w-[80%]`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.chips && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button
                        onClick={() => handleSend('What are the admission requirements?')}
                        className="text-xs px-3 py-1.5 rounded-full bg-cream-100 text-navy-700 hover:bg-gold-500/20 transition"
                      >
                        Admissions
                      </button>
                      <button
                        onClick={() => handleSend('Tell me about fees')}
                        className="text-xs px-3 py-1.5 rounded-full bg-cream-100 text-navy-700 hover:bg-gold-500/20 transition"
                      >
                        Fees
                      </button>
                      <button
                        onClick={() => handleSend('Do you have hostel facilities?')}
                        className="text-xs px-3 py-1.5 rounded-full bg-cream-100 text-navy-700 hover:bg-gold-500/20 transition"
                      >
                        Hostel
                      </button>
                      <button
                        onClick={() => handleSend('Is transport available?')}
                        className="text-xs px-3 py-1.5 rounded-full bg-cream-100 text-navy-700 hover:bg-gold-500/20 transition"
                      >
                        Transport
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-gold-400" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-navy-400 rounded-full typing-dot"></span>
                  <span className="w-2 h-2 bg-navy-400 rounded-full typing-dot"></span>
                  <span className="w-2 h-2 bg-navy-400 rounded-full typing-dot"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-cream-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 rounded-full border border-cream-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30"
              />
              <button
                onClick={() => handleSend()}
                className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 transition"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
