import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UpdatesList() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/updates/')
      .then(res => {
        setUpdates(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-10">Загрузка обновлений...</div>;

  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto p-8">
        <div className="flow-root">
          <ul className="-mb-8">
            {updates.map((update) => (
              <li key={update.id}>
                <div className="relative pb-8">
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className={`h-8 w-8 rounded-full ring-8 ring-white flex items-center justify-center ${
                          update.update_type_display  === 'Feature' ? 'bg-green-500' :
                          update.update_type_display  === 'Bug' ? 'bg-red-500' :
                          'bg-blue-500'}`}>
                          <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-gray-500">
                        <div>
                          <a href="#" className="font-medium text-gray-900 mr-2">{update.version}</a>
                          <a href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span className={`h-1.5 w-1.5 rounded-full ${
                                update.update_type_display  === 'Feature' ? 'bg-green-500' :
                                update.update_type_display  === 'Bug' ? 'bg-red-500' :
                                'bg-blue-500'}`} aria-hidden="true"></span>
                            </div>
                            <div className="font-medium text-gray-900">{update.update_type_display }</div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">{new Date(update.created_at).toLocaleString()}</span>
                      </div>
                      <div className="mt-2 text-gray-700">
                        <p dangerouslySetInnerHTML={{ __html: update.description.replace(/\n/g, '<br/>') }} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
