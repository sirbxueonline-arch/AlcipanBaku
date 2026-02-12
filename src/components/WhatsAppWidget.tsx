import React from 'react';

const WhatsAppWidget = () => {
    const phoneNumber = '994506368731'; // User's actual number
    
    // Different messages for different contexts if needed, but keeping it simple for now
    const message = 'Salam, xidmətləriniz barədə məlumat almaq istəyirəm.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            {/* Desktop Widget (Circular) */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex fixed bottom-6 right-6 z-50 group items-center justify-center p-0 border-0 bg-transparent"
                aria-label="Contact via WhatsApp"
            >
                <div className="relative">
                    {/* Pulse Effect */}
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

                    {/* Main Button */}
                    <div className="relative bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-1/2 right-full mr-4 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-md text-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-sm font-medium text-gray-800">
                        WhatsApp ilə Yazın
                    </div>
                </div>
            </a>

            {/* Mobile Widget (Wide Button) */}
            <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-xl shadow-lg font-bold text-lg hover:bg-[#128C7E] transition-colors"
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c.969.585 1.834.89 2.79.89 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.777-5.766-5.777zm13.129 11.824c-1.882 1.882-4.467 2.918-7.13 2.918-2.661 0-5.245-1.036-7.128-2.918-1.883-1.882-2.919-4.467-2.92-7.129C7.982 7.735 9.019 5.093 11.026 3.13 13.064 1.14 15.688 0 18.526 0c2.839 0 5.463 1.139 7.501 3.13 2.008 1.963 3.044 4.605 2.978 7.237-.066 2.633-1.127 5.218-3.043 7.099zm-4.324-9.358c-2.486 0-4.508 2.023-4.508 4.545 0 2.522 2.022 4.545 4.508 4.545 2.486 0 4.508-2.023 4.508-4.545 0-2.522-2.022-4.545-4.508-4.545zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z" />
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp ilə Yaz
                </a>
            </div>
        </>
    );
};

export default WhatsAppWidget;
