<?php

namespace timer\apiBundle\Controller;

use FOS\RestBundle\Controller\Annotations\View;

use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\ApiDoc;
use FOS\RestBundle\Controller\FOSRestController;
use Guzzle\Http\Message\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use timer\apiBundle\Entity\Track;

class DefaultController extends FOSRestController
{


    /**
     *
     * @param Request $request the request object
     *
     * @return mixed
     */
    public function postAction(){
        $data=json_decode($this->getRequest()->getContent());

        $track = Track::fromJson($data);
        $em=$this->getDoctrine()->getManager();
        $em->persist($track);
        $em->flush();

        return new Response(json_encode($track),200,$this->getCors());
    }

    /**
     * REST action which returns type by id.
     * Method: GET, url: /api/tracks/all/{page}.{_format}
     *
     * @param $page
     * @return mixed
     */
    public function getAction($page) {
        $em=$this->getDoctrine()->getManager();
        $tracks=$em->getRepository("timerapiBundle:Track")->findAll();
        $list=array();
        $list["total"]=sizeof($tracks);
        $p=array();
        for($i=$page*10;($i<sizeof($tracks)&&$i<(($page+1)*10));$i++){
            array_push($p,$tracks[sizeof($tracks)-$i-1]);
        }
        $list["data"]=$p;
        return new Response(json_encode($list),200,$this->getCors());
    }
    private function getCors(){
        $cors=array();
        $cors["Access-Control-Allow-Origin"]= "*";
        $cors["Access-Control-Allow-Headers"]= "origin, content-type, accept, authorization";
        $cors["Access-Control-Allow-Credentials"]= "true";
        $cors["Access-Control-Allow-Methods"]= "GET, POST, PUT, DELETE, OPTIONS, HEAD";
        $cors["Access-Control-Max-Age"]= "1209600";
        return $cors;
    }
}
