import React from 'react';

import Itimage1 from '../Images/Itimage1.jpg';
import Itimage2 from '../Images/itimage2.jpg';
import Itimage3 from '../Images/itimage3.jpg';
import Itimage4 from '../Images/itimage4.jpg';
import NavBar from'../NavBar/NavBar';
import Fotter from '../Fotter/Fotter';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <>
        <NavBar/>
        <div className="container">

            <div id="myslider" className="carousel slide py-4" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img src={Itimage1} className="d-block w-100 h-70" alt="Itimage1" />

                        <div className="carousel-caption">
                            <h1 style={{ color: "red" }}> RoseHill IT Services & Solutions  </h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Itimage2} className="d-block w-100 h-70" alt="Itimage2" />
                    </div>
                    <div className="carousel-item">
                        <img src={Itimage3} className="d-block w-100 h-70" alt="Itimage3" />
                    </div>
                    <div className="carousel-item">
                        <img src={Itimage4} className="d-block w-100 h-70" alt="Itimage4" />
                    </div>
                </div>

                <ul className="carousel-indicators">
                    <li data-target="#myslider" data-slide-to="0" className="active">
                    </li>
                    <li data-target="#myslider" data-slide-to="1" className="">
                    </li>
                    <li data-target="#myslider" data-slide-to="2" className="">
                    </li>
                    <li data-target="#myslider" data-slide-to="3" className="">
                    </li>
                </ul>

                <a className="carousel-control-prev" href="#myslider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myslider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>


            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>


            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>




            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>


            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>


            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>


            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>


            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>



            <p style={{padding:"90px"}}>

                What is Wikimedia Commons?
                Wikimedia Commons is a media file repository making available public domain and freely-licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages.

                Wikimedia Commons uses the same wiki-technology as Wikipedia and everyone can edit it. Unlike media files uploaded to other projects, files uploaded to Wikimedia Commons can be embedded on pages of all Wikimedia projects without the need to separately upload them there.

                Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 65,227,128 files and 63,690,118 media collections. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki.

                Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page. The Wikimedia Commons database itself and the texts in it are licensed under the Creative Commons Attribution/Share-Alike License. More information on re-use can be found at Commons:Reusing content outside Wikimedia and Commons:First steps/Reuse.

</p>

            <br />
            
            <Link className="nav-link" exact to="/" ><ArrowUpwardIcon style={{ float: "right", height: "100px", width: "80px" , marginBottom:"10px"   }} />   Back To The Top</Link>
              
            
            <Fotter />
        </div>
</>


    );
}

export default Home;