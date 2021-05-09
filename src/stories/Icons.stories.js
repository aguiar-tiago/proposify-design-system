import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {Box} from '../components/base';
import {HeadingOne} from '../components/typography';
import { AcceptIcon,AddFolder,AddLine,AddShape,AddTable,AddTextbox,AddVideo,Add,Addcircle,Admin,AlignCenter,AlignJustify,AlignLeft,AlignRight,Api,Approve,Archive,ArwBack,ArwDropdown,ArwRight,AtSymbol,Attachment,Autoalign,Batman,Beaker,Bell,Beta,Bike,Billing,Blog,Bog,Bold,Branding,Briefcase,Calendar,Cancel,Changeplans,Chat,Chatbubble,Chatsettings,Checkmark,Checkmarkcircle,Chevronleft,Chevronright,Circle,Clientpreviews,Clients,Cloudupload,Cog,Cogbook,Color1,ColourPicker,Colour,Comment,Companydetails,Computer,Connected,Content,Cup,Currency,Cursor,CustomerHappiness,Dashboard,Delete,Documents,Domains,Download,Drawer,Duplicate,Edit,EmailOutline,Email,Emailtemplate,Enterprise,Eraser1,Error,ExpandArrow,Fb,Feelibrary,Fees,Flag,Flash,FlipHorizontal,FlipVertical,Folder,Fontlibrary,Fontsize,Fullscreen,Gallery,Generalsettings,Gift,Googleplus,Grid,Guide,Heart,HelpMenu,Help,Helpdesk,Hide,ImageEditing,Image,ImgRotateLeft,ImgRotateRight,Import,Info,Integrations,InterfaceInformation,Invoices,Italics1,Italics,Landscape,Lightbulb,LineHeight,Line,Lineheight1,Link,Linkedin,ListOrdered,ListUnordered,Lock,Lowercase,Mailbox,Maps,Metrics,MinusCircle,Minus,Mobile,More,Move,Moveleft,Nav,Newgroup,OutlineVideocam,PageflowSmall,Pageflow,Pages,Partner,Pay,Payment,Pdf,Pen,Pencil,Person,Piechart,Plan,Plans,Play,Podcast,Portrait,Presentations,Preview,Radio,Redo,Remind,Reorder,Repeaters,Replace,Request,Resources,Revision,Roles,Roller,RotateLeft,RotateRight,Rotate,Saved,Search,Section,Sectionslibrary,Sent,Settings,Shape,ShareTemplate,Show,ShrinkArrow,SignatureInitials,SignaturePen,Signature,Snippets,Stages,Stamp,Star,StaticSmall,Static,Strikethrough,Success,Summary,Suspend,Swatch,T,Table,Tablestyles,Tag,TeamSetting,Team,Teams,Telephone,TemplateConvert,Templates,Text,Theme,Time,Toc,Training,Unarchive,Underline,Undo,UploadDoc,Uppercase,UserB,Variables,Video,View,Vitals,Waterfalling,X } from '../components/icons'


const StyledFragment = styled.div`
    padding: 10px;
    div {
        div {
            overflow: hidden;
            width: 100px;
            height: auto;
            margin: 0 auto;

            h1 {
                text-align: center;
            }
            svg {
                width: 50px!important;
                height: auto!important;
                display: flex;
            }
        }
    }
`;


storiesOf('Base/Icons', module)
    .add('All Icons', () => {
        return (
            <StyledFragment>
                <Box flexDirection="row">
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AcceptIcon
                        <AcceptIcon/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AddFolder
                        <AddFolder/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AddLine
                            <AddLine/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AddShape
                            <AddShape/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AddTable
                            <AddTable/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AddTextbox
                            <AddTextbox/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AddVideo
                            <AddVideo/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Add
                            <Add/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Addcircle
                            <Addcircle/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Admin
                            <Admin/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AlignCenter
                            <AlignCenter/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AlignJustify
                            <AlignJustify/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AlignLeft
                            <AlignLeft/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AlignRight
                            <AlignRight/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Api
                            <Api/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Approve
                            <Approve/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Archive
                            <Archive/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ArwBack
                            <ArwBack/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ArwDropdown
                            <ArwDropdown/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ArwRight
                            <ArwRight/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            AtSymbol
                            <AtSymbol/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Attachment
                            <Attachment/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Autoalign
                            <Autoalign/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Batman
                            <Batman/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Beaker
                            <Beaker/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Bell
                            <Bell/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Beta
                            <Beta/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Bike
                            <Bike/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Billing
                            <Billing/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Blog
                            <Blog/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Bog
                            <Bog/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Bold
                            <Bold/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Branding
                            <Branding/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Briefcase
                            <Briefcase/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Calendar
                            <Calendar/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Cancel
                            <Cancel/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Changeplans
                            <Changeplans/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Chat
                            <Chat/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Chatbubble
                            <Chatbubble/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Chatsettings
                            <Chatsettings/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Checkmark
                            <Checkmark/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Checkmarkcircle
                            <Checkmarkcircle/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Chevronleft
                            <Chevronleft/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Chevronright
                            <Chevronright/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Circle
                            <Circle/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Clientpreviews
                            <Clientpreviews/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Clients
                            <Clients/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Cloudupload
                            <Cloudupload/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Cog
                            <Cog/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Cogbook
                            <Cogbook/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Color1
                            <Color1/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ColourPicker
                            <ColourPicker/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Colour
                            <Colour/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Comment
                            <Comment/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Companydetails
                            <Companydetails/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Computer
                            <Computer/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Connected
                            <Connected/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Content
                            <Content/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Cup
                            <Cup/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Currency
                            <Currency/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Cursor
                            <Cursor/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            CustomerHappiness
                            <CustomerHappiness/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Dashboard
                            <Dashboard/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Delete
                            <Delete/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Documents
                            <Documents/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Domains
                            <Domains/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Download
                            <Download/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Drawer
                            <Drawer/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Duplicate
                            <Duplicate/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Edit
                            <Edit/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            EmailOutline
                            <EmailOutline/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Email
                            <Email/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Emailtemplate
                            <Emailtemplate/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Enterprise
                            <Enterprise/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Eraser1
                            <Eraser1/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Error
                            <Error/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ExpandArrow
                            <ExpandArrow/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Fb
                            <Fb/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Feelibrary
                            <Feelibrary/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Fees
                            <Fees/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Flag
                            <Flag/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Flash
                            <Flash/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            FlipHorizontal
                            <FlipHorizontal/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            FlipVertical
                            <FlipVertical/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Folder
                            <Folder/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Fontlibrary
                            <Fontlibrary/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Fontsize
                            <Fontsize/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Fullscreen
                            <Fullscreen/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Gallery
                            <Gallery/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Generalsettings
                            <Generalsettings/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Gift
                            <Gift/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Googleplus
                            <Googleplus/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Grid
                            <Grid/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Guide
                            <Guide/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Heart
                            <Heart/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            HelpMenu
                            <HelpMenu/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Help
                            <Help/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Helpdesk
                            <Helpdesk/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Hide
                            <Hide/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ImageEditing
                            <ImageEditing/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Image
                            <Image/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ImgRotateLeft
                            <ImgRotateLeft/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ImgRotateRight
                            <ImgRotateRight/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Import
                            <Import/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Info
                            <Info/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Integrations
                            <Integrations/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            InterfaceInformation
                            <InterfaceInformation/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Invoices
                            <Invoices/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Italics1
                            <Italics1/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Italics
                            <Italics/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Landscape
                            <Landscape/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Lightbulb
                            <Lightbulb/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            LineHeight
                            <LineHeight/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Line
                            <Line/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Lineheight1
                            <Lineheight1/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Link
                            <Link/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Linkedin
                            <Linkedin/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ListOrdered
                            <ListOrdered/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ListUnordered
                            <ListUnordered/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Lock
                            <Lock/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Lowercase
                            <Lowercase/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Mailbox
                            <Mailbox/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Maps
                            <Maps/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Metrics
                            <Metrics/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            MinusCircle
                            <MinusCircle/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Minus
                            <Minus/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Mobile
                            <Mobile/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            More
                            <More/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Move
                            <Move/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Moveleft
                            <Moveleft/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Nav
                            <Nav/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Newgroup
                            <Newgroup/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            OutlineVideocam
                            <OutlineVideocam/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            PageflowSmall
                            <PageflowSmall/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Pageflow
                            <Pageflow/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Pages
                            <Pages/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Partner
                            <Partner/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Pay
                            <Pay/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Payment
                            <Payment/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Pdf
                            <Pdf/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Pen
                            <Pen/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Pencil
                            <Pencil/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Person
                            <Person/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Piechart
                            <Piechart/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Plan
                            <Plan/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Plans
                            <Plans/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Play
                            <Play/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Podcast
                            <Podcast/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Portrait
                            <Portrait/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Presentations
                            <Presentations/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Preview
                            <Preview/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Radio
                            <Radio/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Redo
                            <Redo/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Remind
                            <Remind/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Reorder
                            <Reorder/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Repeaters
                            <Repeaters/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Replace
                            <Replace/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Request
                            <Request/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Resources
                            <Resources/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Revision
                            <Revision/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Roles
                            <Roles/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Roller
                            <Roller/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            RotateLeft
                            <RotateLeft/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            RotateRight
                            <RotateRight/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Rotate
                            <Rotate/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Saved
                            <Saved/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Search
                            <Search/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Section
                            <Section/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Sectionslibrary
                            <Sectionslibrary/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Sent
                            <Sent/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Settings
                            <Settings/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Shape
                            <Shape/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ShareTemplate
                            <ShareTemplate/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Show
                            <Show/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            ShrinkArrow
                            <ShrinkArrow/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            SignatureInitials
                            <SignatureInitials/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            SignaturePen
                            <SignaturePen/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Signature
                            <Signature/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Snippets
                            <Snippets/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Stages
                            <Stages/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Stamp
                            <Stamp/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Star
                            <Star/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            StaticSmall
                            <StaticSmall/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Static
                            <Static/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Strikethrough
                            <Strikethrough/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Success
                            <Success/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Summary
                            <Summary/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Suspend
                            <Suspend/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Swatch
                            <Swatch/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            T
                            <T/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Table
                            <Table/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Tablestyles
                            <Tablestyles/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Tag
                            <Tag/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            TeamSetting
                            <TeamSetting/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Team
                            <Team/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Teams
                            <Teams/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Telephone
                            <Telephone/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            TemplateConvert
                            <TemplateConvert/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Templates
                            <Templates/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Text
                            <Text/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Theme
                            <Theme/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Time
                            <Time/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Toc
                            <Toc/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Training
                            <Training/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Unarchive
                            <Unarchive/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Underline
                            <Underline/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Undo
                            <Undo/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            UploadDoc
                            <UploadDoc/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Uppercase
                            <Uppercase/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            UserB
                            <UserB/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Variables
                            <Variables/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Video
                            <Video/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            View
                            <View/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Vitals
                            <Vitals/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            Waterfalling
                            <Waterfalling/>
                        </HeadingOne>
                    </Box>
                    <Box p="10px">
                        <HeadingOne fontSize="16">
                            X
                            <X/>
                        </HeadingOne>
                    </Box>
                </Box>
            </StyledFragment>
        )
    })